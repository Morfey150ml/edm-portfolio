$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    
    // toggle menu/navbar script/Menu Mobile
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings:["Desenvolvedor", "Criativo", "Designer", "Estudioso"],
        typeSpeed:200,
        backSpeed:10,
        loop:true
    });
    var typed = new Typed(".typing-2", {
        strings:["Front End", "Tecnologia", "Conhecimento"],
        typeSpeed:200,
        backSpeed:10,
        loop:true
    });
});   

//  Debounce do Lodash
const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function (){
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Animação
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) /4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        } else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length){
window.addEventListener('scroll', debounce(function(){
    animeScroll();
    console.log('x')
    }, 10));
}

// Preloader
$(window).on('load', function (){
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
    $('body').delay(500).css({'overflow': 'visible'});
    function vanish(){
        loader.classList.add('disppear')
    }
})
