//4!(팩토리얼)  = 4 * 3 * 2 * 1 = 24
// n! = n * (n -1) * ... * 1
// nCr = n! / ((n -r)! * r!)

function solution(balls, share) {
  var answer = 0;

  const n = balls;
  const r = share;

  let one = 1;
  for (let i = n; i >= n - r + 1; i--) {
    one *= i;
  }

  let two = 1;
  for (let i = n - r; i >= 1; i--) {
    two *= i;
  }

  let three = 1;
  for (let i = r; i >= 1; i--) {
    three *= i;
  }
  answer = one / (two * three);

  return answer;
}
