$(document).ready(function() {
  var docWidth = $('body').width(),
    slidesWidth = $('ul').width(),
    rangeX = slidesWidth - docWidth,
    $images = $('ul');
    $(document).on('mousemove', function(e) {
  var mouseX = e.pageX,
    offset = mouseX / docWidth * slidesWidth - mouseX / 2;

  $images.css({
    '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
    'transform': 'translate3d(' + -offset + 'px,0,0)'
  });
});
});