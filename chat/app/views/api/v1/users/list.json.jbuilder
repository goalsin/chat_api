if @user
  json.email @user.email
  json.password @user.password
  json.user_id @user.id
  json.created_at @user.created_at || ''
  
else
  json.error '用户名或密码错误！'
end
