window.addEventListener('load', () => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId_lte=2`)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const template = document.querySelector('template');
                const clone = document.importNode(template.content, true);
                const divElem = clone.querySelector('.div-review');
                divElem.classList.add('div-review');

                const divName = clone.querySelector('.div-review-name');
                divName.innerHTML = `Name: ${item.name}`;

                const divEmail = clone.querySelector('.div-review-email');
                divEmail.innerHTML = `Email: ${item.email}`;

                const divBody = clone.querySelector('.div-review-body');
                divBody.innerHTML = `Body: ${item.body}`;

                document.querySelector('.reviews').appendChild(clone);
            })
        })
        .catch(error => console.log('error', error))
})

