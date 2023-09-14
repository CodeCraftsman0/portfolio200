var swiper = new Swiper('.skills_slider', {
    spaceBetween: 30,
    effect: 'fade',
    // initialSlide: 2,
    loop: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    // mousewheel: {
    //     // invert: false
    // },
    on: {
        init: function(){
            var index = this.activeIndex;

            var target = $('.skills_slider__item').eq(index).data('target');

            console.log(target);

            $('.product-img__item').removeClass('active');
            $('.product-img__item#'+ target).addClass('active');
        }
    }

});

swiper.on('slideChange', function () {
    var index = this.activeIndex;

    var target = $('.skills_slider__item').eq(index).data('target');

    console.log(target);

    $('.product-img__item').removeClass('active');
    $('.product-img__item#'+ target).addClass('active');

    if(swiper.isEnd) {
        $('.prev').removeClass('disabled');
        $('.next').addClass('disabled');
    } else {
        $('.next').removeClass('disabled');
    }

    if(swiper.isBeginning) {
        $('.prev').addClass('disabled');
    } else {
        $('.prev').removeClass('disabled');
    }
});

$(".js-fav").on("click", function() {
    $(this).find('.heart').toggleClass("is-active");
});












// Add JavaScript code here
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', function() {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
});





// JavaScript
function changeScrollbarColors() {
    const root = document.querySelector(':root');
  
    // Generate random color values
    const trackColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const thumbColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const thumbHoverColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  
    // Update CSS variables with new colors
    root.style.setProperty('--scrollbar-track-color', trackColor);
    root.style.setProperty('--scrollbar-thumb-color', thumbColor);
    root.style.setProperty('--scrollbar-thumb-hover-color', thumbHoverColor);
  }
  
  // Change colors every 5 seconds
  setInterval(changeScrollbarColors, 5000);
  