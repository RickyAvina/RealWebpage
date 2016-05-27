/*var dog = $('s1');
var range = 200;

$(window).on('scroll', function () {
  
    var scrollTop = $(this).scrollTop();
    var offset = dog.offset().top;
    var height = dog.outerHeight();
    offset = offset + height / 2;
    var calc = 1 - (scrollTop - offset + range) / range;
  
    dog.css({ 'opacity': calc });
  
    if ( calc > '1' ) {
      dog.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      dog.css({ 'opacity': 0 });
    }
  
});

*/