var swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullests:true,
        clickable:true
    },
    autoplay:{
        delay:4000,
    },
    loop:true,
});



//  products slide
var swiper = new Swiper(".slide-product", {
    slidesPerView:5,
    spaceBetween:20,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay:{
        delay:4000,
    },
    loop:true,
    breakpoints:{
        1200:{
            slidesPerView : 5,
            spaceBetween : 20
        },
        1000:{
            slidesPerView : 4,
            spaceBetween : 20
        },
        700:{
            slidesPerView : 3,
            spaceBetween : 15
        },
        0:{
            slidesPerView : 2,
            spaceBetween : 10
        }
    }
});