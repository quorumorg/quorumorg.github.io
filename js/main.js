$( document ).ready(function() {
  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
  });
  preload([
    '/img/cofounder_klaus_hover@2x.jpg'
    '/img/cofounder_klaus_palumbo@2x.jpg'
    '/img/cofounder_sears_hover@2x.jpg'
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