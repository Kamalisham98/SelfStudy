// Arrow function
const x = (x, y) => {
  return x * y;
};

// console.log(x(12, 12));

// Currying Fucntion
const calculate = (x) => (y) => (z) => {
  return x * y * z;
};

// console.log(calculate(4)(5)(6));