$('.slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // autoplay: true,
          // autoplaySpeed: 2000,
        }
      }, 
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // autoplay: true,
          // autoplaySpeed: 2000,
        }
      },
    ]
  });

$('.slick-items').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  prevArrow: $('.prevslick'),
  nextArrow: $('.nextslick'),
});

  const itemBtn = document.querySelectorAll(".items-btn");

  for (let i = 0; i < itemBtn.length; i++) {
    itemBtn[i].onclick = function () {
          if (itemBtn[i].classList.contains('items-btn__active')) {
            itemBtn[i].classList.remove("items-btn__active");
          }
          else{
              for (let j = 0; j < itemBtn.length; j++) {
                itemBtn[j].classList.remove("items-btn__active");
              }
              itemBtn[i].classList.add("items-btn__active");
          }
      }
  }

  $(".faq-block1").click(function() {
    $(".faq-block__1").slideToggle();
  })
  $(".faq-block2").click(function() {
    $(".faq-block__2").slideToggle();
  })
  $(".faq-block3").click(function() {
    $(".faq-block__3").slideToggle();

  })
  $(".faq-block4").click(function() {
    $(".faq-block__4").slideToggle();
  })

  function myFunction() {
    var x = document.getElementById("main-nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }