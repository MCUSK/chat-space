$(document).on('turbolinks:load', function(){
$(function() {

var search_result =$("#user-search-result")

function appendUsers(user) {
   var html =`<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-name="${user.name}" data-user-id="${user.id}" data-user-name="ユーザー名">追加</a>
              </div>`
    search_result.append(html);
  }

function appendNoUser(user){
    var html =`<div class='chat-group-user clearfix>
                <p class='chat-group-user__name'>${user}</p>
              </div>`
    search_result.append(html);
}

function addUser(name, id) {
   var html =`<div class="chat-group-user clearfix">
                <input type="hidden" name="group[user_ids][]" value="${id}">
                <p class="chat-group-user__name">${name}</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
              </div>`
    $("#chat-group-users").append(html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(users){
          appendUsers(users);
        });
      }
      else {
      appendNoUser("該当するユーザーがいません");
     }
   })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });

  $(".chat-group-form__field--right").on("click", ".chat-group-user__btn--add", function(){
    var name = $(this).attr("data-user-name");
    var id = $(this).attr("data-user-id");
    addUser(name, id)
    $(this).parent().hide()
  });

  $(".chat-group-form__field--right").on("click", ".chat-group-user__btn--remove", function(){
    $(this).parent().remove()
  });
});
})



