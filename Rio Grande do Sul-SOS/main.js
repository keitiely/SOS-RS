//menu
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle ('bx-x');
    navlist.classList.toggle('open');
}
//slider home
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// configurando
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
// event prev click
prev.onclick = function(){
    itemActive = itemActive -1;
    if(itemActive < 0){
        itemActive = countItem -1;
    }
    showSlider();
}
//auto run slide
let refreshInterval = setInterval(() => {
    next.click();
}, 7000)


function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    itemActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
}

/*FAQ perguntas frequentes*/
const q = document.querySelectorAll('.q');
const r = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');
for(let i = 0; i < q.length; i++){
    q[i].addEventListener('click', () => {
        r[i].classList.toggle('a-opened');
        arr[i].classList.toggle('arrow-rotated');
    });
}
