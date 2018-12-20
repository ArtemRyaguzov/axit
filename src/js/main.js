
// Navigation scripts

// Smooth Scrolling
$('.navbar__link, .mobile-nav__link').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});


// Active Link

    $(window).scroll(function(){
        var position = $('.features').offset().top;
        var height = $('.features').height();
        var scroll = $(window).scrollTop();

        if (scroll  > position-300 && scroll < (position-400 + height)) {
          $('.navbar__link_features').addClass('active');
        } else {
              $('.navbar__link_features').removeClass('active');
           }
      })

      $(window).scroll(function(){
          var position = $('.about').offset().top;
          var height = $('.about').height();
          var scroll = $(window).scrollTop();

          if (scroll  > position-400 && scroll < (position-400 + height)) {
            $('.navbar__link_about').addClass('active');
          } else {
                $('.navbar__link_about').removeClass('active');
             }
        })

        $(window).scroll(function(){
            var position = $('.pricing').offset().top;
            var height = $('.pricing').height();
            var scroll = $(window).scrollTop();

            if (scroll  > position-400 && scroll < (position-400 + height)) {
              $('.navbar__link_pricing').addClass('active');
            } else {
                  $('.navbar__link_pricing').removeClass('active');
               }
          })

          $(window).scroll(function(){
              var position = $('.testimonials').offset().top;
              var height = $('.testimonials').height();
              var scroll = $(window).scrollTop();

              if (scroll  > position-400 && scroll < (position-400 + height)) {
                $('.navbar__link_testimonials').addClass('active');
              } else {
                    $('.navbar__link_testimonials').removeClass('active');
                 }
            })

            $(window).scroll(function(){
                var position = $('.contact').offset().top;
                var height = $('.contact').height();
                var scroll = $(window).scrollTop();

                if (scroll  > position-400 && scroll < (position-400 + height)) {
                  $('.navbar__link_contact').addClass('active');
                } else {
                      $('.navbar__link_contact').removeClass('active');
                   }
              })



// Side menu

$('.navbar__sidemenu').click(function(e){
    e.preventDefault();
    $('.mobile-nav').toggleClass('mobile-nav__type_opened');
});


$('.mobile-nav__closebtn').click(function(e){
    e.preventDefault();
    $('.mobile-nav').removeClass('mobile-nav__type_opened');
});


// Modal

$('.openmodal').click(function(e){
    e.preventDefault();
    $('.mobile-nav').removeClass('mobile-nav__type_opened');
    $('.modal').css('display', 'block');
});

$('.modal__closebtn').click(function(){
    $('.modal').css('display', '');
});

// End of Navigation scripts

// Typed.js init

var typed = new Typed(".typed-text", {
           strings: [
             "modern axure template for beautiful prototypes"
           ],
           typeSpeed: 50,
           showCursor: false,
           startDelay: 1000
     });

     var typed = new Typed(".text-to-type", {
                strings: [
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
                ],
                typeSpeed: 10,
                showCursor: false,
                startDelay: 1000
          });

// Wow.js init

new WOW({
    mobile: false
}).init();


// Tabs

$('.tabs__box').click(function(){
    $('.tabs__box').removeClass('tabs__box_color_orange');
    $(this).addClass('tabs__box_color_orange');
    $('.reappear').removeAttr('style');
    $('.reappear').addClass('blink');
    setTimeout(function(){
        $('.reappear').removeClass('blink');
    }, 1000);
});
