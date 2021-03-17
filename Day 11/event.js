const EventEmitter = require("events");
const my = new EventEmitter();

// Event Listener
my.on("Kamal isham", () =>{
    console.log("some event happened with kamal isham")

})

my.emit("Kamal isham");