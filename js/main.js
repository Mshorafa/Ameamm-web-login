$(document).ready(function()
{
  $(".Nsubmit").click(function() {
    $(".Swap-Content").toggle("slow");
    $(".PhoneCode").toggle("slow");


});
$("#wrapper").click( function() {
	$(".menu").toggleClass("close");
});
$(".sub-menu").click(function () {
$(this).toggle();
});

$('.dropdown-menu li ul [data-toggle=dropdown]').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).parent().siblings().removeClass('open');
    $(this).parent().toggleClass('open');
  });
  $('.dropdown-menu li ul').click(function() {
        $(this).toggle("fast");
    });


// -----------------------------
$(".dropdown li").hover(
  function() {
    $(this).find('ul').slideDown();
  },
  function() {
    $(this).find('ul').slideUp();
  });

});
