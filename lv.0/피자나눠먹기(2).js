function solution(n) {
  let count = 1;
  for (let i = 1; i <= count; i++) {
    if ((i * 6) % n === 0) {
      return count;
    }
    count += 1;
  }
}
