// 1과 소수를 재외한 모든수 
// 약수가 3개 이상인 수를 합성수라고 부른다.


function solution(n) {
    let answer = 0;
    let isConut = falase

    for(let i = n; i >= 1; i-- ){
        
        for(let i = 2; i < n - 1; i++){
           if(i % n === 0){
            isConut= true;
           }
        }
        if(isConut) {
            answer += 1
        }
    }
    return answer;
}