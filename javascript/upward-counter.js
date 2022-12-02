// The Code I used was found here: https://stackoverflow.com/questions/68458839/intersection-observer-and-animated-number-counter

// Algorithm's Efficiency: About 0.33ms

const counterElements = document.querySelectorAll(".count");
const speed = 45; // the LOWER this number the FASTER the upward count!

// Counters
function counter(target, start, stop) {
  target.innerText = 0.1;
  const counterInterval = setInterval(() => {
    const inc = Number(stop / speed);
    start += inc;
    const valueConverted = (Math.ceil(start * 100) / 100).toFixed(0);
    target.innerText = valueConverted;
    if (valueConverted == stop) {
      clearInterval(counterInterval);
    }
  }, 30);
}

function obCallBack(entries) {
  entries.forEach((entry) => {
    console.log('⬆️')
    const { target } = entry;
    const stopValue = target.innerText;
    const startValue = 0;
    if (!entry.isIntersecting) return;
    counter(target, startValue, stopValue);
    counterObserver.unobserve(target); // Important: if you use 'observer.disconnect();' instead, the counter will ONLY activate for the first <div> but not on the others that come after it! Hence, you should use the '.unobserve()'-method instead, like it was used here...
  });
}

const counterObserver = new IntersectionObserver(obCallBack, { threshold: 1 });
counterElements.forEach((counterElem) => counterObserver.observe(counterElem));