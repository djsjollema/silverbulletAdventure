const map = [
    [[" "],["N"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],
    [["s"],[" "],["E"],[" "],["N"],["W"],[" "],[" "],[" "],[" "],[" "],[" "]],
    [[" "],["W"],[" "],["N"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],
    [[" "],[" "],["S"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],
    [[" "],["S"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "]],
    [[" "],["E"],[" "],[" "],[" "],[" "],["W"],[" "],[" "],[" "],[" "],[" "]],
    [[" "],[" "],[" "],[" "],[" "],["E"],[" "],["W"],[" "],[" "],[" "],["N"]],
    [[" "],[" "],[" "],[" "],[" "],[" "],["E"],[" "],["N"],["S"],[" "],[" "]],
    [[" "],[" "],[" "],[" "],[" "],[" "],[" "],["S"],[" "],[" "],[" "],[" "]],
    [[" "],[" "],[" "],[" "],[" "],[" "],[" "],["N"],[" "],[" "],["W"],[" "]],
    [[" "],[" "],[" "],[" "],[" "],["N"],[" "],[" "],[" "],["W"],[" "],[" "]],
    [[" "],[" "],[" "],[" "],[" "],[" "],["S"],[" "],[" "],[" "],[" "],[" "]]
];

let currentPosition = 0;

possiblePositions();


function possiblePositions(){
    console.log("je bent op positie: " + currentPosition);
    for(i=0;i<map.length;i++){
        if(map[i][currentPosition] != " "){
            console.log("je kan naar: " + i + " via " + map[i][currentPosition]);
        }
    
    }
}