const openImg = new Image()
openImg.src = './img/open.svg'

const closeImg = new Image()
closeImg.src = './img/close.svg'

document.querySelectorAll('.questions__img').forEach((el) => {
    const paragraph = el.parentElement.parentElement.children[1];

    el.addEventListener('click', function () {
        if(paragraph.classList.contains('active')) {
            paragraph.classList.remove('active')
            el = closeImg
        }
        else {
            paragraph.classList.add('active')
            el = openImg
        }
    })
})