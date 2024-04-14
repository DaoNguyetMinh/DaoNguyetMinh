// Iterative Approach
var sum_to_n_a = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Formula Based
var sum_to_n_b = function (n) {
  return (n * (n + 1)) / 2;
};

// Recursive Approach
var sum_to_n_c = function (n) {
  if (n <= 1) {
    return n;
  }
  return n + sum_to_n(n - 1);
};
