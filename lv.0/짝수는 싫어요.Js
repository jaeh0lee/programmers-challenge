function solution(n) {
  let count = 1;
  while (count <= n) {
    if (count % 2 === 1) {
      answer.push(count);
    }
    count = count + 1;
  }
  return answer;
}
