$(function() {
  $(".oneWordMood").on("keydown", function(e) {
    if (e.which == 32 || e.which == 13) {
      // your code
      return false;
    }
  });

  $('.submitMood').click(function() {
    let userEmail = $('.email').val();
    let moodInput = $('.oneWordMood').val();
    let journalInput = $('.journal').val();
    let currentDate = new Date;
    let subject = `Mood Mail Sent On ${currentDate}`;
    let body = `On ${currentDate} you wrote that your one word mood was ${moodInput}. You also journaled the following: ${journalInput}`;

    window.open(`mailto:${userEmail}?subject=${subject}&body=${body}`);
  });

})
