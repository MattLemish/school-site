document.addEventListener('DOMContentLoaded', function(){

     // Поочерёдное появление блоков
    const blocks = document.querySelectorAll('.animated__block');
    const sectionOne = document.querySelector('.section__one');
    const sectionTwo = document.querySelector('.section__two');

    window.addEventListener('scroll', function(){
        let elementStart = sectionOne.offsetHeight * (1/2);
        let scrollTop = window.scrollY;
        if(scrollTop >= elementStart) {
            blocks[0].classList.add('animated');
        }
    });
    window.addEventListener('scroll', function(){
        let elementStart = sectionOne.offsetHeight * (15/20);
        let scrollTop = window.scrollY;
        if(scrollTop >= elementStart) {
            blocks[1].classList.add('animated');
        }
    });
    window.addEventListener('scroll', function(){
        let elementStart = sectionOne.offsetHeight + sectionTwo.offsetHeight * (1/5);
        let scrollTop = window.scrollY;
        if(scrollTop >= elementStart){
            blocks[2].classList.add('animated');
        }
    });

    // Появление и исчезание header
    const header = document.querySelector('.header');
    let lastScroll = 0;

    const containsHide = header.classList.contains('hide');

    document.addEventListener('scroll', function(){
        if (window.scrollY > lastScroll && !containsHide && window.scrollY > 250){
            header.classList.add('header__hide');
        } else if (window.scrollY < lastScroll){
            header.classList.remove('header__hide');
        }


        lastScroll = window.scrollY;
    });
    
    
    
    
});

$(document).ready(function(){
    $('.slider').slick();
});