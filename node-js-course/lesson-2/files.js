const filesystem = require("fs")


// reading files
filesystem.readFile("./files/text.txt", (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})

// executed in meantime, while data from file are being read
console.log("last line of code")

// writing files
filesystem.writeFile("./files/text2.txt","To oto zdanie zostało dopisane do pliku przy pomocy funkcji writeFile.", () => {
    console.log("file was written")
})

// directories
if (!filesystem.existsSync("./assets")){
    filesystem.mkdir("./assets", (err) => {
        if (err){
            console.log(err)
        }
        console.log("directory has been created")
    })
}else{
    // asynchronus func. have callback func. which are executed after they did the task
    filesystem.rmdir("./assets", (err) => {
        if (err) {
            console.log(err)
        }
        console.log("removed directory")
        
    })
}

// deleting files
if(filesystem.existsSync("./files/exists.txt")){
    filesystem.unlink("./files/exists.txt", (err) => {
        if (err) {
            console.log(err)
        }

        console.log("file removed")
    })
}else{
    filesystem.writeFile("./files/exists.txt","Ala ma kota!", (err) =>{
        if (err){
            console.log(err)
        }
        console.log("file created")
    })
}