let count = 0;
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let answer = document.getElementById('answer');


function increaseCount() {
    count = Number(input1.value) + Number(input2.value);
    answer.innerHTML = count;
}

function decreaseCount() {
    count = Number(input1.value) - Number(input2.value);
    answer.innerHTML = count;
} 

function multipleCount() {
    count = Number(input1.value) * Number(input2.value);
    answer.innerHTML = count;
}

function divideCount() {
    count = Number(input1.value) / Number(input2.value);
    answer.innerHTML = count.toFixed(3);
}

function clearCount() {
    count = 0;
    answer.innerHTML = count;
    input1.value = input2.value = "";
    answer.innerHTML = 'ANSWER';
}