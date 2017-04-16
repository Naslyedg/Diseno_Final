$(document).ready(function() {
  alert('sadfsadf');
  $('a').click(function () {
      var url = $(this).attr('rel');
      console.log(url);
      $('#iframe').attr('src', url);
      $('#iframe').reload();
  });
});
