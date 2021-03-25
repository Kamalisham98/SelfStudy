//Basic for loop
for (var i = 0; i<=10; i++){
    if(i%2==1) return "Hello "+ i;
}
//

let a =9;
for (let i = 0; i<=6; i++){
    a+=2;
    return a;
}

// console.log(a);

// fibonaci
let b = [0,1];

for(let i = 0; i<10; i++){
    b[i+2] = b[i]+b[i+1];
}

// console.log(b);

//Prime
for(let i = 2; i < 100 ; i++){
    let p=false;
    for(let j = 1; j < i; j++){
        if(i%j!=0 && i!== j){
            p==true;
        }
    }(p==false)
    console.log(i);
}

