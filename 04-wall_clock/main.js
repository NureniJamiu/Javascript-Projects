const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;

  // add a style of transition:"none" to seconds hand after a complete oscillation.
  secondHand.style.transition =
    seconds === 0 ? "none" : "all 0.05s cubic-bezier(0.29, 2.63, 0.58, 1)";

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const minutes = now.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;

  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
