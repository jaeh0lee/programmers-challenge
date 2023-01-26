function solution(numbers, num1, num2) {
  return numbers.splice(num1, num2 - num1 + 1);
}

// splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
