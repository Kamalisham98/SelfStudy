const TwoDimention = require("./twoDimention");

class square extends TwoDimention{
    constructor(length){
        super("Square");
        this.length  = length;
    }
    calculateArea(){
        super.calculateArea();
        console.log(this.length**2);
    }
    interduce(){
        super.interduce();
        console.log('this is square')
    }
}

let square1 = new square(10);

square1.calculateArea();
square1.interduce();