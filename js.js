let count = 0;
let timeLeft = 10;
let timerId;

const click = document.getElementById("click");
const timeDisplay = document.getElementById("time");
const countDisplay = document.getElementById("count");

// Обработчик кликов
click.addEventListener("click", () =>{
    count = count + 1;
    countDisplay.textContent = count;
});

function StartGame(){
    count = 0;
    timeLeft = 10;

    countDisplay.textContent = count;
    timeDisplay.textContent = timeLeft;

   click.disabled = false;

   timerId = setInterval( ()=>{
    timeLeft = timeLeft - 1;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0 ){
        clearInterval(timerId);
        click.disabled = true;
        alert("Время вышло! Ты кликнул " + count + " раз! >:)");
    }



   }, 1000);
}