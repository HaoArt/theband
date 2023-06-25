
const buyBtns = document.querySelectorAll('.js-buy-ticket');

const modal = document.querySelector('.js-modal');

const modalClose = modal.querySelector('.js-close-modal');

const modalContainer= document.querySelector('.js-modal-container');

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

var header = document.getElementById('header');

var mobileMenu = document.getElementById('js-mobile-menu');

var headerHeight = header.clientHeight;
// đóng mở menu 
mobileMenu.onclick = function(){
    var isClose = header.clientHeight === headerHeight;
    if (isClose){
        header.style.height = 'auto';
    }
    else{
        header.style.height = null ;
    }
}

// tự động đsong menu sau khi click

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    // nextElementSibling : kiểm tra anh em liền kề của nó
    menuItem.onclick=function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        }
        else{
            header.style.height =null;
        }
    }
}
