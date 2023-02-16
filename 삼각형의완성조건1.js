function solution(sides) {
    var answer = 0;
    // 최대값을 구할라면 등장할수 없는 최소값을 넣는다.
    let maxV = -1;
    let maxIDX = -1;
    for(let i = 0; i < sides.length; i++){
        const item = sides[i]
        if(maxV < item){
            maxV = item
            maxIDX = i
        }
    }
    let sum = 0
    for(let i = 0; i < sides.length; i++){
        if(i !== maxIDX){
            sum += sides[i]
        }
    }
    return maxIDX < sum ? 1 : 2
}