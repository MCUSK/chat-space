$(function() {
  //非同期通信
  function buildHTML(message){
      var html = `<div class="chat_field" data-message-id = "${message.id}">
      <div class="chat__user">
      ${message.name}
      <span>
      ${message.time}
      </span>
      </div>
      <div class="chat__text">
      ${message.content}<br>
      </div>
      <img src=${message.image} class="lower-message__image" alt="">
      </div>`
      return html;
    }

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
      $('.chat').append(html);
      $(".chat").animate({scrollTop: $(".chat").get(0).scrollHeight}, 150);
      $(".massage__form").get(0).reset();
      $(".submit").prop("disabled", false);
      console.log(html)
    })
    .fail(function(){
      $(".submit").prop("disabled", false);
      alert('error');
    });
  });

//自動更新
  var interval = setInterval(reload,5000);
  function reload(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      var last_id = $('.chat_field').last().data('message-id');
    $.ajax({
        url:  window.location.href,
        dataType:  'json',
        data: {id: last_id}
      })
      .done(function(messages) {
        messages.forEach(function(message){
        $(".chat").append(buildHTML(message));
        $(".chat").animate({scrollTop: $(".chat").get(0).scrollHeight}, 150);
        });
      })
      .fail(function() {
        alert('自動更新に失敗しました');
      })
    } else {
      clearInterval(interval)
    }
}


});
