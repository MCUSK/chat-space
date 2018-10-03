  json.content  @message.content
  json.name  @message.user.name
  json.image  @message.image.url
  json.time   @message.created_at.strftime("%Y/%m/%d %H:%M:%S")
  json.id       @message.id
