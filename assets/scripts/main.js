const offers = document.querySelectorAll('.offer');
for (const offer of offers) {
    offer.addEventListener('click', function () {
        if (!(offer.classList.contains('offer-active'))) {
            offer.classList.add('offer-active');
        }
    })
}

const homeBoundaries = document.getElementById('home').getBoundingClientRect();
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll' , function() {
    if (window.pageYOffset >= Math.abs(homeBoundaries.top - homeBoundaries.bottom)) {
        backToTop.classList.remove('back-to-top-hidden');
    }
    else {
        backToTop.classList.add('back-to-top-hidden');
    }
})

const inputName = document.getElementById('client-name');
const inputEmail = document.getElementById('client-email');
const newsletterForm = document.getElementById('newsletter-form');
const modal = document.querySelector('.modal');
const modalNameField = document.querySelector('.modal-name');

newsletterForm.onsubmit = function(e) {
    e.preventDefault();
    if (inputName.value.length > 3 && inputEmail.value.length > 3) {
        modalNameField.innerText = localStorage.getItem('name').split(' ')[0];
        modal.classList.remove('modal-hidden');
    }
};

function signupConfirm () {
    if (inputName.value.length > 3 && inputEmail.value.length > 3) {
        localStorage.setItem('name', inputName.value);
        localStorage.setItem('email', inputEmail.value);
    }
}

modal.addEventListener('click', function() {
    modal.classList.add('modal-hidden');
    inputName.value = '';
    inputEmail.value = '';
})