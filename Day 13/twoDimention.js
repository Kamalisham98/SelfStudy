const Geometry = require("./geometry");

class TwoDimention extends Geometry{
    constructor(name){
        super(name,"2D");
    }
    //Overriding method
    introduce(){
        super.introduce()
        console.log(`this is ${this.type}`)
    }
}

module.exports = TwoDimention;