const posBox = document.getElementById('posBox');
const myButton = document.getElementById('myButton');
let feedback = document.getElementById('feedback'); 
const button_left = document.getElementById('button_left');
const button_forward = document.getElementById('button_forward');
const button_right = document.getElementById('button_right');
const directions = ["N","E","S","W"];

const map = [
    [[" "],["N"],[" "],[" "],[" "],[" "]],
    [["S"],[" "],["W"],[" "],[" "],[" "]],
    [[" "],["E"],[" "],["W"],["N"],[" "]],
    [[" "],[" "],["E"],[" "],[" "],[" "]],
    [[" "],[" "],["S"],[" "],[" "],["E"]],
    [[" "],[" "],[" "],[" "],["W"],[" "]]
];

let position = 0;
let orientation = 0;

fromTo();

myButton.addEventListener('click',()=>{
    position = posBox.value;
    fromTo();
})



function fromTo(){
    feedback.innerHTML = "je bent op positie: " + position +"<br>";
    for(i=0;i<6;i++){
        if(map[i][position] != " "){
            feedback.innerHTML += "je kan naar: " + i + " via " + map[i][position] + "<br>";
        }
    
    }
}