const formWork = document.querySelector('.form-work');
let arr = []
formWork.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formWork); // создаём объект FormData, передаём в него элемент формы
    // теперь можно извлечь данные
    const name = formData.get('name');
    const work = formData.get('work-experience');
    let object = { name, work };
    arr.push(object);
    localStorage.setItem('items', JSON.stringify(arr));
    formWork.reset();
    if ("content" in document.createElement("template")) {
        const template = document.getElementById('task-template');
        let li = template.content.cloneNode(true);
        console.log(li);
        li.querySelector('p').innerText = `${name} работал ${work}`;
        createButton(li.querySelector('input'), li);
        document.querySelector('.task-ul').appendChild(li);
    }
}

window.addEventListener('load', () => {
    const data = JSON.parse(localStorage.getItem('items'));
    console.log(data);
    for(let i=0; i < data.length; i++) {
        if ("content" in document.createElement("template")) {
            const template = document.getElementById('task-template');
            let li = template.content.cloneNode(true);
            li.querySelector('p').innerText = `${data[i].name} работал ${data[i].work}`;
            createButton(li.querySelector('input'), li);
            document.querySelector('.task-ul').appendChild(li);
        }
    }
})

let createButton = (liInput, li) => {
    liInput.addEventListener('click', () => {
        if(liInput.checked) {
            if ("content" in document.createElement("template")) {
                const template = document.getElementById('button-task');
                let tem = template.content.cloneNode(true);
                const button = tem.querySelector('.task-button');
                console.log(button);
                button.classList.remove('hidden');
                document.querySelector('.task-button').appendChild(template);
                button.addEventListener('click', () => {
                    li.remove();
                })
            }
        } else {
            let button = li.querySelector('.task-li > .task-button');
            button.remove();
        }
    })
}