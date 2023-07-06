let val;
//Number to string
val = '8'
val = Number(val)
 
//Boolean to string
val = true
val = null
val = Number(val)
 
//both false and null is 0
val = 'Alan'
val = [6,5,4]
val = Number(val)
val = perseInt('12.34')
val = perseFloat('12.34')
 
const num1 = 8
const num2 = 18
const sum = num1 + num2
console.log(sum)

console.log(val)
console.log(typeof val)
console.log(val.toFixed(2))

