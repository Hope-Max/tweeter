$(document).ready(function() {

  $('.new-tweet textarea').on('input', function() {
    const $input = $(this).val();
    const length = $input.length;
    const initial = 140;
    const $counter = initial - length;

    // find the CSS selector which mataches the .counter by using jQuery and keyword this
    const $outputElement = $(this).next().find('#counter');
    $outputElement.val($counter);

    // the color is black when the counter is greater than or equal to 0, red otherwise
    $outputElement.css('color', 'black');
    if ($counter < 0) {
      $outputElement.css('color', 'red');
    }

  });
});