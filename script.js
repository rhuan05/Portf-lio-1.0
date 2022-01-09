// Efeito Slider

var slider = document.querySelector('.container--slider');
var sliderProjetos = document.querySelector('.container--slider--projetos');
var scrollTech = 0;
var scrollProjetos = 0;
var widthTela = window.screen.width;

if(widthTela <= 410){
    function setaEsquerda(){
        if(scrollProjetos == 0){
            scrollProjetos = 0;
        } else{
            scrollProjetos = scrollProjetos + 200;
            slider.style.marginLeft = scrollProjetos + 'px';
        };
    }

    function setaDireita(){
        if(scrollProjetos <= -600){
            scrollProjetos = 0;
            slider.style.marginLeft = scrollProjetos + 'px';
        } else{
            scrollProjetos = scrollProjetos - 200;
            slider.style.marginLeft = scrollProjetos + 'px';
        };
    }
} else {
    function setaEsquerda(){
        if(scrollTech == 0){
            scrollTech = 0;
        } else{
            scrollTech = scrollTech + 300;
            slider.style.marginLeft = scrollTech + 'px';
        };
    }

    function setaDireita(){
        if(scrollTech == -900){
            scrollTech = 0;
            slider.style.marginLeft = scrollTech + 'px';
        } else{
            scrollTech = scrollTech - 300;
            slider.style.marginLeft = scrollTech + 'px';
        };
    }
};

var menuCelular = document.querySelector('.menuCelular');

menuCelular.addEventListener('click', ()=>{
    document.querySelector('header').classList.toggle('menuClicado');
});


// Scroll Animado do Menu

const menuItems = document.querySelectorAll('a[href^="#"]');

menuItems.forEach(item =>{
    item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 20,
        behavior: 'smooth'
    });
};
