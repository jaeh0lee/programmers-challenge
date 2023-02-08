const factorial = (i) =>{
    let result = 1;
    for(let v = 1; v <= i; v++){
        result *= v;
    }
    return result;
}


function solution(n) {
    for(let i =1; ; i++){
        const result = factorial(i)
        if(n < result){
            return i - 1;
        }
    }
    return answer;
}