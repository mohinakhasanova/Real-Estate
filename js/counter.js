// Counter
function animateValue(id, start, end, duration) {
  if (start === end) return;
  let range = end - start;
  let current = start;
  let increment = end > start? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let obj = document.getElementById(id);
  let timer = setInterval(() => {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

animateValue("counter-1", 0, 500, 600);
animateValue("counter-2", 0, 485, 600);
animateValue("counter-3", 0, 10, 600);
animateValue("counter-4", 0, 5, 600);