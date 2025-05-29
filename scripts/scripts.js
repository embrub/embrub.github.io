var submitted = false;

$('#gform').on('submit', function (e) {
  $('#gform *').fadeOut(2000);
  $('#gform').prepend('Your submission has been processed...');
});

$('img[data-gif]').each(function () {
  const $img = $(this);
  const original = $img.attr('src');
  const hoverGif = $img.data('gif');

  $img
    .on('mouseenter', () => $img.attr('src', hoverGif))
    .on('mouseleave', () => $img.attr('src', original));
});