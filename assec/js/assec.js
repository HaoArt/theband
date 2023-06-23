
const buyBtns = document.querySelectorAll('.js-buy-ticket')

const modal = document.querySelector('.js-modal')

const modalClose = modal.querySelector('.js-close-modal')

const modalContainer= document.querySelector('.js-modal-container')

// hiển thị modal (hàm hiển thị)
function showBuyTickets(){
    modal.classList.add('open')
}

// ẩn modal (hàm ẩn)
function hideBuyTickets(){
    modal.classList.remove('open')
}

// vòng lặp từng thẻ button
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyTickets);
}

modalClose.addEventListener('click',hideBuyTickets);

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})
