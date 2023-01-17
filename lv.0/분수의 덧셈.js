function solution(num1, denom1, num2, denom2) {
  //분모
  const topnum = num1 * denom2 + num2 * denom1;
  //분자
  const botdenom = denom1 * denom2;
  //최소공약수 기본값
  let maxium = 1;

  for (let i = 1; i <= topnum; i++) {
    if (topnum % i === 0 && botdenom % i === 0) {
      maxium = i;
    }
  }
  return [topnum / maxium, botdenom / maxium];
}
