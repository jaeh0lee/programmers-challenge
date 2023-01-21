function solution(numbers) {
  var answer = 0;
  for (i of numbers) {
    answer += i;
  }
  return answer / numbers.length;
}

// for of 반복물을 통해 배열을 순환하며 answer에 i만큼 더해줌 그걸 배열의 길이로 나누면 평균값이 구해짐
