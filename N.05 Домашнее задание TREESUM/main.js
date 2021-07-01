
function counter(arr) {
  let sum = 0;

  for (let elem of arr) {
    if (typeof elem == "object") {
      sum += counter(elem);
    } else {
      sum += elem;
    }
  }

  return sum;
}

let result = (counter([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));

