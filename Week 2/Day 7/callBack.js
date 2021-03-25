/*callback function*/
//Build array
let arr = [];
function buildArray() {
    for (i = 1; i <= 31; i ++) {
        arr.push(i*3);
  }
  return console.log(arr);
}

buildArray();


let  rank = [1,2,3];
function map(arr){
    return arr.map( (el) => el/3 );
}

console.log(map(arr));


