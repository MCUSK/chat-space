$(function() {

var search_result =$("#user-search-result") //

function appendUsers(user) {
   var html =`<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="ユーザー名">追加</a>
              </div>`
    search_result.append(html);
  }

function appendNoUser(user){
    var html =`<div class='chat-group-user clearfix>
                <p class='chat-group-user__name'>${user}</p>
              </div>`
    search_result.append(html);
}

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    console.log(input)
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
   .done(function(users) {
    console.log("next")
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
});