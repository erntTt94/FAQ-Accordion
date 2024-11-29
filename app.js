const button = document.querySelectorAll('.section-content');
const image = document.querySelectorAll('.button-img');


button.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        btn.nextElementSibling.classList.toggle('visible');
        image.forEach((img) => {
            if (img.parentElement.parentElement.nextElementSibling.classList.contains('visible')) {
                img.src = 'assets/images/icon-plus.svg';
            } else {
                img.src = 'assets/images/icon-minus.svg'
            }
        })

    })

})














