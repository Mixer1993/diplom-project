$('.footer-paralax').parallax({imageSrc: 'https://www.publicdomainpictures.net/pictures/150000/velka/sunset-sky-1455125487HWs.jpg'});




$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('active');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor');
    $(this).next('p').slideToggle(300)
})

$('.easily_find-items > div').on('click', function(){
    $(this).next('p').slideToggle(1100);
    $(this).parent('.easily_find-items').toggleClass('easily_find-items_padding');
})




$('.carusel').slick({
    autoplaySpeed: 2000,
    dots: true,
    adaptiveHeight: true
});

$(Window).scroll(function(){
    if($(this).scrollTop() > 500){
        $('#up').fadeIn();    
    }else{
        $('#up').fadeOut();   
    }
})

$('#up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 1000)
})

$('#home').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#about').offset().top}, 1000)
})

