const firstName = 'Eduardo'
const lastName = 'Retamales'

let val;

//Concatenate
val = firstName + lastName
val = firstName + ' ' + lastName

//Append
val = 'Cristian'
val += 'Rojas'

//Escaping
val = "That's great. You've found a job"
val = 'That\'s great. You\'ve found a job'

//Length
val = firstName.length

//Concat
val = firstName.concat('',lastName)

//Change case
val = firstName.toUpperCase()
val = firstName.toLowerCase()

console.log(val)
