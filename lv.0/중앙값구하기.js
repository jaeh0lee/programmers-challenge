function solution(array) {
    return array.sort((a , b)=> a - b)[Math.floor(array.length/2)]
}

//Math.floor에 대해 다시 공부하는 시간이였다 
// https://change-words.tistory.com/64 sort(a, b) => a - b 가 작동하는 원리 
// sort는 기본적으로 배열을 문자열 타입으로 간주하고 비교한다