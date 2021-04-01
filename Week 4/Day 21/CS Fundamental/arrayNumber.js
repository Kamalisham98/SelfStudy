function numberArray(num) {
  for (let l = 1; l <= num; l++) {
    let hasil = [];
    for (let k = 1; k <= num; k++) {
      hasil.push(num);
    }
    for (let i = num - 1; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        if (l >i ) {
          hasil.push("#");
          hasil.unshift("#");
        } else {
        hasil.push(i);
        hasil.unshift(i);
        }
      }
    }
    console.log(hasil.join(""));
  }
}

numberArray(5);
