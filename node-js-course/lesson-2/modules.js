// importing things from other files
const abc = require('./people')
const {people, ages} = require('./people')

console.log(abc)
console.log(`From module: ${abc.people} and ${abc.ages}`)

console.log(people)
console.log(ages)

const os = require("os")
console.log(os.platform(), os.homedir())