window.addEventListener('load', () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                if (item.id > 10) {
                    // поймать ошибку и выйти
                } else {
                    let divElem = document.querySelector('.reviews').appendChild(document.createElement('div'))
                    divElem.classList.add('div-review')
                    let divName = divElem.appendChild(document.createElement('div'))
                    divName.classList.add('div-review-name')
                    divName.innerHTML = `Name: ${item.name}`
                    let divEmail = divElem.appendChild(document.createElement('div'))
                    divEmail.classList.add('div-review-email')
                    divEmail.innerHTML = `Email: ${item.email}`
                    let divBody = divElem.appendChild(document.createElement('div'))
                    divBody.classList.add('div-review-body')
                    divBody.innerHTML = `Body: ${item.body}`
                }
            })
        })
        .catch(error => console.log('error', error))
})
