

$(document).ready(function() {
  $.get("home.html", function(data) {
    $(".results").html(data);
    console.log('home loaded');
  })
});

let prev = 5;
let $window = $(window);
let nav = $('.scrollhide-nav');

$window.on('scroll', function(){
  const scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});