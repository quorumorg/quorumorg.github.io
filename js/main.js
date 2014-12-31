$( document ).ready(function() {

  $('nav a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
  });

  $('a#nominate').click(function() {
    $('#nomination_form').toggle(500);
    return false;
  });

  $('#ss-submit').click(function() {
    $('#ss-form').toggle();
    $('#join_thanks').toggle();
  });

  $('#nominate-submit').click(function() {
    $('#nomination_form').toggle();
    $('#nomination_thanks').toggle();
  });

  preload([
    '/img/cofounder_klaus_hover@2x.jpg',
    '/img/cofounder_palumbo_hover@2x.jpg',
    '/img/cofounder_sears_hover@2x.jpg',
    '/img/cofounder_spedale_hover@2x.jpg'
  ]);
});

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

