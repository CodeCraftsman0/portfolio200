// Input Lock
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});








// JavaScript
function changeScrollbarColors() {
  const root = document.querySelector(':root');

  // Generate random color values
  const trackColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const thumbColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const thumbHoverColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  // Update CSS variables with new colors
  root.style.setProperty('--scrollbar-track-color', trackColor);
  root.style.setProperty('--scrollbar-thumb-color', thumbColor);
  root.style.setProperty('--scrollbar-thumb-hover-color', thumbHoverColor);
}

// Change colors every 5 seconds
setInterval(changeScrollbarColors, 5000);
