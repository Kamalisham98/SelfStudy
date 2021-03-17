// map  build-in
const arr = [1, 2, 7, 4, 8, 4, 8, 5, 3, 2, 5, 8];

const arrMap = arr.map((anggota) => {
  return anggota * 2; // array dengan setiap anggotanya dikalikan 2
});

//  sort() akan mengubah arr
// array disusun berdasarkan penulisan bukan besaran
arrMap.sort();
// console.log(arr);
// console.log(arrMap);
// console.log(arrMapSort);

//Filter buid-in
const arrfilter = arr.filter((el, index) => {
  return el > 3, index > 2;
});
// console.log(arrfilter);

let arr2 = [23, 33, 664, 3.1, 22, 64, 8.7, 111, 45, 6, 3, 73, 9];

console.log(arr2);

arr2.sort((a, b) => a - b); // sorting number ascending

let arr3 = [...arr2];

arr3.sort((a, b) => b - a); // sorting number descending

console.log(arr3);
