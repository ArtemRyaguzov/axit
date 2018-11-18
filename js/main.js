// Navigation scripts

// Smooth Scrolling
$('.navbar__link').on('click', function(event) {
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

$('.mobile-nav__link').on('click', function(event) {
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


// Side menu

$('.navbar__sidemenu').click(function(e){
    e.preventDefault();
    $('.mobile-nav').css('width', '250px');
});


$('.mobile-nav__closebtn').click(function(e){
    e.preventDefault();
    $('.mobile-nav').css('width', '0');
});

// Modal

$('.openmodal').click(function(e){
    e.preventDefault();
    $('.mobile-nav').css('width', '0');
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
