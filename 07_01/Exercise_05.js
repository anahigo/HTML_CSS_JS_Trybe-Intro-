const btnClick = document.getElementById('button-click');
const counter = document.getElementById('count');
let clickCount = 0;

btnClick.addEventListener('click', () => {
  clickCount += 1;
  counter.innerText = clickCount;
});