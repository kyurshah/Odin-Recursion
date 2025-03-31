function fib(number) {
  series = [0, 1];

  if (number == 0) {
    return (series = [0]);
  } else if (number == 1) {
    return series;
  }

  for (let i = 2; i <= number; i++) {
    let arr = series[i - 1] + series[i - 2];
    series.push(arr);
  }

  return series;
}

function fibRecursion(number) {
  if (number == 0) return [0];
  else if (number == 1) return [0, 1];

  let series = fibRecursion(number - 1);
  series.push(series[series.length - 1] + series[series.length - 2]);

  return series;
}

console.log("this is iterative");
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(8));

console.log("this is recursive");
console.log(fibRecursion(0));
console.log(fibRecursion(1));
console.log(fibRecursion(2));
console.log(fibRecursion(8));
