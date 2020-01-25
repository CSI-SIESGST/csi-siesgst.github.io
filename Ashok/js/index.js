var section = document.querySelector('.numbers');
var hasEntered = false;

window.addEventListener('scroll', (e) => {
    var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;

    if (shouldAnimate && !hasEntered) {
    hasEntered = true;

    $('.value').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
        });
    });

  }
});