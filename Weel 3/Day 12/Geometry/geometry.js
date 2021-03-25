class Geometry{
    constructor(name, type){
        this.name =name;
        this.type = type;
    }

    interduce(){
        console.log(`${this.name} dan ${this.type}`);

    }
}


module.exports = Geometry;