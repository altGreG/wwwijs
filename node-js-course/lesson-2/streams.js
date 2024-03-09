const fs = require("fs")

// we start using data before they are fully loaded from file
const readStream = fs.createReadStream("./files/text3.txt", {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./files/text4.txt')



// event listener
readStream.on('data', (chunk) => {
    console.log("----- New Chunk ------")
    console.log(chunk)
    writeStream.write("\nNew Chunk\n")
    writeStream.write(chunk)
})

// piping

readStream.pipe(writeStream)