AOS.init({
  duration: 800,
  easing: 'slide',
});

(function ($) {
  'use strict';

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll',
  });

  var fullHeight = function () {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // Scrollax
  $.Scrollax();

  // Burger Menu
  var burgerMenu = function () {
    $('body').on('click', '.js-fh5co-nav-toggle', function (event) {
      event.preventDefault();

      if ($('#ftco-nav').is(':visible')) {
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
      }
    });
  };
  burgerMenu();

  var onePageClick = function () {
  $(document).on('click', '#ftco-nav a[href^="#"], .ftco-footer-widget a[href^="#"]', function (event) {
    event.preventDefault();

    var target = $($.attr(this, 'href'));
    if (target.length) {
      $('html, body').animate(
        {
          scrollTop: target.offset().top - 70,
        },
        500
      );
    }
  });
};

  onePageClick();

  var carousel = function () {
    $('.home-slider').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: false,
      autoplayHoverPause: false,
      items: 1,
      navText: [
        "<span class='ion-md-arrow-back'></span>",
        "<span class='ion-chevron-right'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    $('.carousel-properties').owlCarousel({
      autoplay: true,
      center: false,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
    $('.carousel-agent').owlCarousel({
      autoplay: false, // Set to false to disable autoplay
      center: false,
      loop: false,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });
    $('.carousel-testimony').owlCarousel({
      autoplay: true,
      autoHeight: true,
      center: true,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      dots: true,
      navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
    $('.carousel-testimony1').owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 1,          // no delay
  autoplaySpeed: 3000,         // smooth slide speed
  smartSpeed: 3000,            // smooth transition
  autoplayHoverPause: false,   // don't stop on hover
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 3
    },
    600: {
      items: 5
    },
    1000: {
      items: 7
    }
  }
});
  };
  carousel();

  $('nav .dropdown').hover(
    function () {
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass('show');
      $this.find('> a').attr('aria-expanded', true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find('.dropdown-menu').addClass('show');
    },
    function () {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass('show');
      $this.find('> a').attr('aria-expanded', false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find('.dropdown-menu').removeClass('show');
      // }, 100);
    }
  );

  $('#dropdown04').on('show.bs.dropdown', function () {
    console.log('show');
  });

  // scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $('.ftco_navbar'),
        sd = $('.js-scroll-wrap');

      if (st > 150) {
        if (!navbar.hasClass('scrolled')) {
          navbar.addClass('scrolled');
        }
      }
      if (st < 150) {
        if (navbar.hasClass('scrolled')) {
          navbar.removeClass('scrolled sleep');
        }
      }
      if (st > 350) {
        if (!navbar.hasClass('awake')) {
          navbar.addClass('awake');
        }

        if (sd.length > 0) {
          sd.addClass('sleep');
        }
      }
      if (st < 350) {
        if (navbar.hasClass('awake')) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }
        if (sd.length > 0) {
          sd.removeClass('sleep');
        }
      }
    });
  };
  scrollWindow();

  var counter = function () {
    $('#section-counter, .hero-wrap, .ftco-counter').waypoint(
      function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
          $('.number').each(function () {
            var $this = $(this),
              num = $this.data('number');
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              7000
            );
          });
        }
      },
      { offset: '95%' }
    );
  };
  counter();

  var contentWayPoint = function () {
    var i = 0;
    $('.ftco-animate').waypoint(
      function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
          i++;

          $(this.element).addClass('item-animate');
          setTimeout(function () {
            $('body .ftco-animate.item-animate').each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data('animate-effect');
                  if (effect === 'fadeIn') {
                    el.addClass('fadeIn ftco-animated');
                  } else if (effect === 'fadeInLeft') {
                    el.addClass('fadeInLeft ftco-animated');
                  } else if (effect === 'fadeInRight') {
                    el.addClass('fadeInRight ftco-animated');
                  } else {
                    el.addClass('fadeInUp ftco-animated');
                  }
                  el.removeClass('item-animate');
                },
                k * 50,
                'easeInOutExpo'
              );
            });
          }, 100);
        }
      },
      { offset: '95%' }
    );
  };
  contentWayPoint();

  // magnific popup
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
})(jQuery);

let currentSlide = 0;
const slides = document.querySelectorAll('#tagline-wrapper .slide-item');
const hero = document.querySelector('.hero-wrap');

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');

  // Change background image
  const newBg = slides[currentSlide].getAttribute('data-bg');
  hero.style.backgroundImage = `url('${newBg}')`;
}

// Init
const firstBg = slides[0].getAttribute('data-bg');
hero.style.backgroundImage = `url('${firstBg}')`;
slides[0].classList.add('active');

// Auto rotate
setInterval(showNextSlide, 3000);

document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = this;
  const captcha = grecaptcha.getResponse();
  const btn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const btnLoader = document.getElementById('btnLoader');
  const successMessage = document.getElementById('successMessage');

  if (!captcha) {
    alert('Please complete the CAPTCHA');
    return;
  }

  // Show loader and disable button
  btn.disabled = true;
  btnText.textContent = 'Sending...';
  btnLoader.classList.remove('hidden');

  const checkboxes = document.querySelectorAll('input[name="property_type[]"]:checked');
  const selected = Array.from(checkboxes).map((cb) => cb.value);
  const commaSeparated = selected.join(', ');

  console.log('Selected Open Land:', commaSeparated);

  const formData = {
    name: form.name.value,
    email: form.email.value,
    contact: form.contact.value,
    requirements: commaSeparated,
    message: form.message.value,
    'g-recaptcha-response': captcha,
  };

  fetch(
    'https://script.google.com/macros/s/AKfycbw5A_s3YhRxMN4vh4g5JrFCzZIHyUhbPRpOZu3dvnjzLhS4z_rfWTE4VLPuR_UeD3VEMg/exec',
    {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }
  )
    .then(() => {
      btn.disabled = false;
      btnText.textContent = 'Send Message';
      btnLoader.classList.add('hidden');

      form.reset();
      grecaptcha.reset();

      successMessage.classList.remove('hidden');
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 5000);
    })
    .catch(() => {
      btn.disabled = false;
      btnText.textContent = 'Send Message';
      btnLoader.classList.add('hidden');
      alert('Your message has been sent successfully! Please wait for our response.');
    });
});