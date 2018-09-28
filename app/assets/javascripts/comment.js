$(document).on('turbolinks:load', function(){
  function buildHTML(message){
      var html = `<div class="chat__user">
      ${message.name}
      <span>
      ${message.time}
      </span>
      </div>
      <div class="chat__text">
      ${message.content}<br>
      <img border="0" src=${message.image.url} class="lower-message__image" alt="">
      </div>`
      return html;
    }
  $(function(){
    $('.massage__form').on('submit', function(e){
      e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat').append(html)
      $(".chat").animate({scrollTop: $(".chat").get(0).scrollHeight},150);
      $(".massage__form").get(0).reset();
      $(".submit").prop("disabled", false);
    })
    .fail(function(){
      $(".submit").prop("disabled", false);
      alert('error');
    })
  })
})
})