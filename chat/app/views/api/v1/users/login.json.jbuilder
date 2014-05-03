if @user
  json.token @user.api_key.token
  # json.email @user.email
  # json.password @user.password
  # json.user_id @user.id
  # json.created_at @user.created_at || ''
else
  json.error '用户名或密码错误！'
end
