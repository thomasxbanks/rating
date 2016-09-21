$(document).ready(function(){
  var rating = $('.rating')[0].innerText
  setTimeout(function(){
  if ((rating > 0) && (rating < 20)) {
    $('.rating').addClass('red')
  }

  if ((rating >= 20) && (rating < 40)) {
    $('.rating').addClass('orange')
  }

  if ((rating >= 40) && (rating < 60)) {
    $('.rating').addClass('yellow')
  }

  if ((rating >= 60) && (rating < 80)) {
    $('.rating').addClass('green')
  }

  if ((rating >= 80) && (rating <= 100)) {
    $('.rating').addClass('greendk')
  }



    $('.rating').attr('data-rating', rating)
  }, 100)

})
