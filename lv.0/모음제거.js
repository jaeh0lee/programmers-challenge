function solution(my_string) {
    var answer = '';
    for(let i =0; i < my_string.length; i++){
        const item = my_string[i]
        if(item === "a"){
            continue
        }
        if(item === "e"){
            continue
        }
        if(item === "o"){
            continue
        }
        if(item === "u"){
            continue
        }
        if(item === "i"){
            continue
        }
        answer += item
    }
    return answer;
}