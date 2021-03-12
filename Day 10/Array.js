//array
let fridge = ["Apple", "Carrot", "Milk", "Orange", "Leech", "Cabbage"];

console.log(fridge.includes("Apple"));
console.log(fridge.includes('milk'));


//blom ketemu
for (let i = 0; i < fridge.lenght; i++){
    if (fridge[i].toLowerCase() == "milk"){
    console.log(true);}
}

