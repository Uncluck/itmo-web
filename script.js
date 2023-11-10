(() => {
    let before_load_time = new Date().getTime();
    window.onload = () => {
        const item = document.getElementById("load")
        item.innerText = "Page load time is" + (new Date().getTime() - before_load_time) + "ms"
        console.log(item.innerText);
    }
})();

document.addEventListener("DOMContentLoaded", () => {
    const path = document.location.href
    console.log(path);
    const car = document.getElementById('car')
    const bike = document.getElementById('bike')
    const scooter = document.getElementById('scooter')
    if ((path.includes('sedan.html')) || (path.includes('jeep.html'))){
        car.classList.add('active')
        bike.classList.remove('active')
        scooter.classList.remove('active')
    }
    if (path.includes('sport-bike.html')){
        car.classList.remove('active')
        bike.classList.add('active')
        scooter.classList.remove('active')
    }
})
