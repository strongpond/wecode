function getEven(i, num) {
  const arr = [];
  for (let x = i; x <= num; x++) {
    if (x % 2 == 0) {
      arr.push(x);
    }
  }
  return arr;
}

getEven(1, 50);
