function solution(s) {
    const numbers = [];
    const collecNums  = ''
    for(let i = 0; i < s.length; i++){
        const item = s[i];
        if(item === 'Z'){
            numbers.pop();
        } else if (item === ' '){
            numbers.push(Number(collecNums))
            collecNums = ''
        } else {
            collecNums += item
        }
    }
    if(collecNums !== ' '){
        numbers.push(Number(collecNums))
    }

    const sum = 0
    for(let i= 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    return sum;
}