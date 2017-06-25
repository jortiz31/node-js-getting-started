$(document).ready(function() {
  $.get("home.html", function(data) {
    $(".results").html(data);
    console.log('home loaded');
  })
});

$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-shrinknav-wrapper");
    } else{
      $("body").removeClass("sticky-shrinknav-wrapper");
    }
  });
});

$("#homeBtn").click(function(e){
  e.preventDefault();
  $.get("home.html", function(data) {
    $(".results").html(data);
    console.log('ajax performed');
  })
});

$("#aboutBtn").click(function(e){
  e.preventDefault();
  $.get("about.html", function(data) {
    $(".results").html(data);
    console.log('ajax performed');
  })
});

$("#galleryBtn").click(function(e){
  e.preventDefault();
  $.get("gallery.html", function(data) {
    $(".results").html(data);
    console.log('ajax performed');
  })
});

$("#contactBtn").click(function(e){
  e.preventDefault();
  $.get("contact.html", function(data) {
    $(".results").html(data);
    console.log('ajax performed');
  })
});
