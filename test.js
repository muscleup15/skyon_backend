const x = function (y) {
  return y * y;
};

function calculator(a, action) {
  let result = action(a);
  console.log(result);
  return result;
}

calculator(2, x);

const a = 'a b';
const b = a.split(' ')[1];
console.log(b);
