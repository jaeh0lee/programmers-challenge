function solution(numbers) {
  var answer = 0;
  for (i of numbers) {
    answer += i;
  }
  return answer / numbers.length;
}

// for of 반목문을 통해 i가 배열을 반복하면서 answer에 계속 누적해서 더해줌 그걸 배열의 길이로 나누면 평균값이 나옴
