const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

fetch('https://jsonplaceholder.typicode.com/comments?postId_lte=2')
    .then(response => response.json())
    .then(data => {
        const template = document.querySelector('template');
        data.forEach((item) => {
            const clone = template.content.cloneNode(true);

            const divName = clone.querySelector('.div-review-name');
            divName.innerHTML = `<span class="bold-span">Name: <br> </span>${item.name}`;

            const divEmail = clone.querySelector('.div-review-email');
            divEmail.innerHTML = `<span class="bold-span">Email: <br> </span>${item.email}`;

            const divBody = clone.querySelector('.div-review-body');
            divBody.innerHTML = `<span class="bold-span">Body: <br> </span>${item.body}`;
            swiper.appendSlide(clone);
            swiper.update();
        });
    })