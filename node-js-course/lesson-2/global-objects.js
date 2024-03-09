// Global object

console.log(global)

// execute func. ones in 10 sec
global.setTimeout(() => {
   console.log("in the timeout")
   clearInterval(int)   
}, 10000);

// execute func. every 3 sec.
var i = 1
const int = setInterval( () => {
    i++
    console.log(`in the interval ${i}`)
}, 1000)

console.log(__dirname)
console.log(__filename)