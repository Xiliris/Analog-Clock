let hoursArrow = document.getElementById('hours');
let minutesArrow = document.getElementById('minutes');
let secondsArrow = document.getElementById('seconds');

window.addEventListener('load', () => {
  setTime();
});

setInterval(() => {
  setTime();
}, 1000);

function setTime() {
  let hours = new Date()
    .toLocaleString('en-US', {
      hour: 'numeric',
      hour12: true,
    })
    .split('')[0];
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  hoursArrow.style = `transform: rotateZ(${hours * 30}deg);`;
  minutesArrow.style = `transform: rotateZ(${minutes * 6}deg);`;
  secondsArrow.style = `transform: rotateZ(${seconds * 6}deg);`;
}
