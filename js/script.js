//modal -1
let popupСall = document.querySelector('.popup-call')
let openPopupСall = document.querySelectorAll('.call-btn')
let closePopupCall = document.querySelector('.popup-close')



openPopupСall.forEach(element => {
    element.addEventListener('click', function () {
        popupСall.style.display = 'flex'
    })
});

closePopupCall.addEventListener('click', function (event) {
    event.preventDefault()
    popupСall.style.display = 'none'

    if (event.target.classList.contains('capture-form-btn')) {

    }
})

//modal -2
let closePopupCheck = document.querySelector('.check-close')
let popupCheck = document.querySelector('.popup-check')
let openCheckBtn = document.querySelector('.check-btn')
openCheckBtn.addEventListener('click', function () {
    popupCheck.style.display = 'flex'
})


closePopupCheck.addEventListener('click', function (event) {
    event.preventDefault()
    popupCheck.style.display = 'none'
})

//Аккордеон
const accordion = document.querySelectorAll('.panel-group');
accordion.forEach((accordionEvent) => {
    accordionEvent.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.closest('.panel-heading')) {
            const allContent = accordionEvent.querySelectorAll('.panel-collapse');
            allContent.forEach((content) => {
                content.style.display = 'none';
            })
            let panel = event.target.closest('.panel');
            let panelCollapse = panel.querySelector('.panel-collapse');
            panelCollapse.style.display = 'block';
        }
    })
})