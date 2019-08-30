$(function() {
  $(".oneWordMood").on("keydown", function(e) {
    if (e.which == 32 || e.which == 13) {
      // your code
      return false;
    }
  });

})
