var section = document.querySelector('.numbers');
var hasEntered = false;

window.addEventListener('scroll', (e) => {
  var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;

  if (shouldAnimate && !hasEntered) {
    hasEntered = true;

    $('.value').each(function () {
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      },
      {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
      });
    });

    $('.circle').each(function () {
      $(this).css({"border": "0px solid #1D75FC"}).animate({
        'borderWidth': '1rem'
      },
      {
        duration: 4000,
        easing: 'swing'
      });
    });
  }
});