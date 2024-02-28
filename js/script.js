const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', ()=>{
    btn.classList.toggle('open');
    menu.classList.toggle('open');
})

const liens = document.querySelectorAll('#menu a')
liens.forEach( 
    function(item) { item.addEventListener('click', ()=>{
        btn.classList.toggle('open');
        menu.classList.toggle('open');
    })
})