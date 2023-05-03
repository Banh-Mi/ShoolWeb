const statistical = document.querySelector('.statistical');
const first_box = document.querySelector('.first_box');
const second_box = document.querySelector('.second_box');
const third_box = document.querySelector('.third_box');
const fourth_box = document.querySelector('.fourth_box');
let check = false;

function countUp(elem, value, symbol = null) {
    let count = 0;
    let timerId = setInterval(() => {
        count += Math.round(value/250)
        elem.querySelector('.counter_content').innerText =  count;
        if(count >= value) {
            elem.querySelector('.counter_content').innerText =  symbol !== null ? symbol : value; 
            clearInterval(timerId);
        } 
    }, 1);
}

window.addEventListener('scroll', function(e) {
    const rect = statistical.getBoundingClientRect();
    if(rect.top <= this.innerHeight  && check === false) {
        check = true;
        countUp(first_box, 32562420, '3.2M+');
        countUp(second_box, 13350, '13.000+');
        countUp(third_box, 4620, '4000+');
        countUp(fourth_box, 125, '100+');
    }
    
})



