let num1 = 1
let num2 = 2
let num3 = 3

let sum1 = 0 
let sum2 = 0

function resetScore() {
    sum1 = 0
    sum2 = 0
    document.getElementById("scorehome").textContent = sum1;
    document.getElementById("scoreaway").textContent = sum2;
}
function one_pointshome() {
    sum1 += num1
    document.getElementById("scorehome").textContent = sum1;
}
function one_pointsaway() {
    sum2 += num1
    document.getElementById("scoreaway").textContent = sum2;
}
function two_pointshome() {
    sum1 += num2
    document.getElementById("scorehome").textContent = sum1;
}
function two_pointsaway() {
    sum2 += num2
    document.getElementById("scoreaway").textContent = sum2;
}
function three_pointshome() {
    sum1 += num3
    document.getElementById("scorehome").textContent = sum1;
}   
function three_pointsaway() {
    sum2 += num3
    document.getElementById("scoreaway").textContent = sum2;
}