// while문 활용
function solution(n) {
  let answer = [];
  let count = 1;
  while (count <= n) {
    if (count % 2 === 1) {
      answer.push(count);
    }
    count = count + 1;
  }
  return answer;
}

// for문 활용
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }
  return answer;
}
