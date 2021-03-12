// Switch case almost same as if else
let option = 5;
switch (option) {
  case 1:
  case 4: // 2 pilihan 1 jawaban
    console.log("this is one!");
    break;//it will break here
  case 2:
  case "5":
    console.log("this is two");
    break;//it will break here
  case 3:
    console.log("this is three");
    break;//it will break here
  default://have same use as else
    console.log("this is dafault");
    // We don't need break because this is last code
}

