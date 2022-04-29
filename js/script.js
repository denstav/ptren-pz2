let popupСall = document.querySelector(".popup-call");
let openPopupСall = document.querySelectorAll(".call-btn");
openPopupСall.forEach((element) => {
  element.addEventListener("click", function () {
    popupСall.style.display = "flex";
  });
});

let popupDiscount = document.querySelector('.popup-discount')
let openForm = document.querySelectorAll(".capture-form-btn");

openForm.forEach((element) => {
    element.addEventListener("click", function () {
        popupDiscount.style.display = "flex";
    });
  });

let popupCheck = document.querySelector('.popup-check')
let openCheckBtn = document.querySelector(".check-btn");
openCheckBtn.addEventListener('click', function(){
    popupCheck.style.display = "flex";
})

const popups = document.querySelectorAll('.popup')

for (const popupEl of popups) {
  for (const popupCloseEl of popupEl.querySelectorAll('.popup-close')) {
    popupCloseEl.addEventListener('click', e => {
      popupEl.style.display = 'none'
    })
  }
}


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

