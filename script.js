let before_load_time = new Date().getTime();
window.onload = page_load_time;

function page_load_time() {
    const item = document.getElementById("load")
    item.innerText = "Page load time is" + (new Date().getTime() - before_load_time) + "ms"
    console.log(item.innerText);
}

const path = document.location
const car = document.getElementById('car')

if (path === "car.html") {
    car.style.backgroundColor = 'black'
    car.style.border = '1px solid blue'
}

if (path === "jeep.html") {
    car.style.backgroundColor = 'black'
}
