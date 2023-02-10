function solution(my_string) {
    
    var answer = 0;
    
    for(let i = 0; i < my_string.length; i++){
        
        let result = Number(my_string[i])
        if(Number.isNaN(result)){
            continue;
        }
        answer += result
    }
    return answer;
}