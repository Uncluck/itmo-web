const formWork = document.querySelector('.form-work');
let arr = []
formWork.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formWork); // создаём объект FormData, передаём в него элемент формы
    // теперь можно извлечь данные
    const name = formData.get('name');
    const work = formData.get('work-experience');
    let object = {
        name: `${name}`,
        work: `${work}`
    }
    arr.push(object)
    localStorage.setItem('items', JSON.stringify(arr))
    let getInputName = document.getElementById('name')
    getInputName.value = ''
    let getInputWork = document.getElementById('work')
    getInputWork.value = ''
    let li = document.querySelector('.task-ul').appendChild(document.createElement('li'))
    li.classList.add('task-li')
    let liInput = li.appendChild(document.createElement('input'))
    liInput.setAttribute('type','checkbox')
    let p = li.appendChild(document.createElement('p'))
    p.innerText = `${name} работал ${work}`
    createButton(liInput, li)
}

window.addEventListener('load', () => {
    const data = JSON.parse(localStorage.getItem('items'))
    console.log(data);
    for(let i=0; i < data.length; i++) {
        let li = document.querySelector('.task-ul').appendChild(document.createElement('li'))
        li.classList.add('task-li')
        let liInput = li.appendChild(document.createElement('input'))
        liInput.setAttribute('type','checkbox')
        let p = li.appendChild(document.createElement('p'))
        p.innerText = `${data[i].name} работал ${data[i].work}`
        createButton(liInput, li)
    }
})

let createButton = (liInput, li) => {
    liInput.addEventListener('click', () => {
        if(liInput.checked) {
            let liInputButton = li.appendChild(document.createElement('button'))
            liInputButton.classList.add('task-button')
            liInputButton.innerText = 'Убрать'
            liInputButton.addEventListener('click', () => {
                li.remove()
            })
        } else {
            let button = li.querySelector('.task-li > .task-button')
            button.remove()
        }
    })
}