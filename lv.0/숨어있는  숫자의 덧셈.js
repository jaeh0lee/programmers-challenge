function solution(my_string) {
    var answer = 0;
    const keepNumber = ''
    for(let i = 0; i < my_string.length; i++){
        let items = my_string[i]
    }
    if(Number.isNaN(Number(item))){ // Number.isNaN() 주어진 값이 NaN인지 판별 
        answer += Number(keepNumber)
        // continue;
    } 
    keepNumber += items
    return answer;
}