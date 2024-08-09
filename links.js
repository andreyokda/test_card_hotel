const links = document.getElementsByClassName('item-description-title-link');

function changeColor(e) {
    e.target.style.color = e.target.style.color ? null : '#FFFFFF80';
}
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', changeColor);
}


const pay = document.getElementsByClassName('item-booking-reserved-pay');

function changeColorPay (colorPay) {
    colorPay.target.style.color = colorPay.target.style.color ? null : '#FF97B0';
}
for (var i = 0; i < pay.length; i++) {
    pay[i].addEventListener('click', changeColorPay);
}
