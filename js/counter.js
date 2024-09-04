let counter = 1;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');

incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter;
});

decrementBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        counterValue.textContent = counter;
    }
});