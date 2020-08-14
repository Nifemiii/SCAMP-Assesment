function fibonacci(num) {

  const result = [0, 1];
  for (var i = 2; i <= num; i++) {
    const a = (i - 1);
    const b = (i - 2);
    result.push(a + b);
  }
  return result[num];

}

console.log(fibonacci(8));