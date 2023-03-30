const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuList = document.querySelector('.menu__list'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

menuList.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// carousel
// $(document).ready(function(){
//     $('.slider').bxSlider();
//   });
$(document).ready(function(){
jQuery('.bxslider').bxSlider({
    // adaptiveHeight: true,
    tickerHover: true,
    randomStart: true,
    mode: 'fade',
    auto: true,
    pause: 3000,
    touchEnabled: true,
    nextText: '',
    prevText: '',
    pagerCustom: '#bx-pager'
});
});
  

  // smooth scroll and page up
$(window).scroll(function() {
    if ($(this).scrollTop() > 1200) {
        $('.pageUp').fadeIn();
    } else {
        $('.pageUp').fadeOut();
    }
});

// Modal

// $('[data-modal=writing]').on('click', function(){
//     $('.overlay, #consultation').fadeIn('slow');
// });
// $('.modal__close').on('click', function() {
//     $('.overlay, #consultation, #thaks, #order').fadeOut('slow');
// });


// $('.button_mini').each(function(i) {
//     $(this).on('click', function() {
//         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
//         $('.overlay, #order').fadeIn('slow');
//     });
// });


function valideForms(form){
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символов")
              },
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
        }
    });
}

valideForms('#writing form');


$('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
        return;
    }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#writing');
        $('form').trigger('reset');
    });
    return false;
});

// gallery
(function() {
    var $lightbox = $("<div class='lightbox'></div>");
    var $img = $("<img>");
    var $caption = $("<p class='caption'></p>");
  
    // Add image and caption to lightbox
  
    $lightbox
      .append($img)
      .append($caption);
  
    // Add lighbox to document
  
    $('body').append($lightbox);
  
    $('.lightbox-gallery img').click(function(e) {
      e.preventDefault();
  
      // Get image link and description
      var src = $(this).attr("data-image-hd");
      var cap = $(this).attr("alt");
  
      // Add data to lighbox
  
      $img.attr('src', src);
      $caption.text(cap);
  
      // Show lightbox
  
      $lightbox.fadeIn('fast');
  
      $lightbox.click(function() {
        $lightbox.fadeOut('fast');
      });
    });
  
  }());