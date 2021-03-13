// map  build-in
const arr = [1, 2, 7, 4, 8, 4, 8, 5, 3, 2, 5, 8];

const arrMap = arr.map((anggota) => {
  return anggota * 2; // array dengan setiap anggotanya dikalikan 2
});

//  sort() akan mengubah arr
// array disusun berdasarkan penulisan bukan besaran
arrMap.sort();
console.log(arr);
console.log(arrMap);
// console.log(arrMapSort);

//Filter buid-in
const arrfilter = arr.filter((el, index) => {
    return el>3, index > 2;
});
console.log(arrfilter);
