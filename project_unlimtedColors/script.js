const randomcolor = function () {
  const alpha = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += alpha[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
document.querySelector('#start').addEventListener('click', function () {
  if (!intervalId) {
    intervalId = setInterval(()=>{
      document.body.style.backgroundColor = randomcolor()
    }, 1000);
  }
});
document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = null;
});
