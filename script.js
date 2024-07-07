const ele = document.querySelector('#search');
let cnt = 0;
function increment() {
  console.log('hi', cnt++);
}
const debounce = (fn, delay) => {
  let interval;
  return function () {
    clearTimeout(interval);
    interval = setTimeout(() => {
      fn();
    }, delay);
  };
};

const result = debounce(increment, 2000);
ele.addEventListener('keyup', result);
