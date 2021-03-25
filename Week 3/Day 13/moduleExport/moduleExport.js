class modClass{
    constructor(name,genre){
        this.name=name
        this.genre=genre
    }
    greet(){
        console.log(`hai ${this.name}`)
    }
    // privite | can be access through this class only
    #secret(){
        console.log("this is a secret")
    }
    // to access secret method
    accessSecret(){
        this.#secret(); // method in class be a property
    }
    static boolean = true;

}

function modFunction(){
    console.log('this is function')
}

let variable = 12;

// module.exports = {
//     modClass:modClass,
//     modFunction: modFunction,
//     variable:variable,
// }

module.exports ={modClass,modFunction,variable}