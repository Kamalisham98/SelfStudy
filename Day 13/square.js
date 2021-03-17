const TwoDimention = require("./twoDimention");

class square extends TwoDimention{
    constructor(length){
        super("Square");
        this.length = length;

    }
    //overloading method
    introduce(intro){
        super.introduce()
        console.log(`this is ${intro}`)
    }
}

let square1= new square(15);
console.log(square1);
square1.introduce("kamal");