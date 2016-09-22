function rating(){
  $('.rating').each(function() {

      var rating = this.innerText
      // log for debug
      console.log(rating)

      if ((rating > 0) && (rating < 20)) {
          $(this).addClass('red')
      }

      if ((rating >= 20) && (rating < 40)) {
          $(this).addClass('orange')
      }

      if ((rating >= 40) && (rating < 60)) {
          $(this).addClass('yellow')
      }

      if ((rating >= 60) && (rating < 80)) {
          $(this).addClass('green')
      }

      if ((rating >= 80) && (rating <= 100)) {
          $(this).addClass('greendk')
      }

      $(this).attr('data-rating', rating)
  })
}


$(document).ready(function() {
    rating()
})
