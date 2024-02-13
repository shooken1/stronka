$(document).ready(function() {
    $('#yesButton').click(function() {
      $('#gifImage').attr('src', 'second.gif');
    });
  
    $('#noButton').click(function() {
      $('#noButton').animate({
        'margin-top': '150vh' 
      }, 'slow');

      
        $('#gifImage').attr('src', 'third.gif'); 
      
    });
  });
  
  
