let h1 = document.getElementsByTagName("h1")[0];
let sec = 0;
let min = 0;
let hrs = 0;
let countTime;

function tick() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
    if (min >= 60) {
      min = 0;
      hrs++;
    }
  }
}
function add() {
  tick();
  h1.textContent =
    (hrs > 9 ? hrs : "0" + hrs) +
    ":" +
    (min > 9 ? min : "0" + min) +
    ":" +
    (sec > 9 ? sec : "0" + sec);
  timer();
}

function timer() {
  countTime = setTimeout(add, 1000);
}

const timeDiv = document.getElementById("timer");
let saveCountTime = parseInt(sessionStorage.getItem("countTime"));
console.log(saveCountTime);
timeDiv.textContent = `$(countTime) seconds`;

timer();
