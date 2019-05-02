const $ = window.$;
$(function() {
  $('nav a[href^="/' + window.location.pathname.split("/")[1] + '"]')
  .addClass('active');
});
