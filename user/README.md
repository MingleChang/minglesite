# 接口说明  
- - -
## 创建用户（注册） 
地址：/user/create  
请求方式：POST  
入参说明：

|参数名|类型|是否必填|说明|
|:-:|:-:|:-:|:-:|
|ip|String|false|注册的时的ip|
|registerSource|String|true|注册源(PC,iOS,Android)|
|registerMethod|String|true|注册方式(USERNAME:用户名注册，PHONE:手机号注册，EMAIL:邮箱注册)|
|userName|String|false|用户名,如为用户名注册则必填|
|phone|String|false|手机号,如为手机号注册则必填|
|email|String|false|邮箱地址,如为邮箱注册则必填|
|password|String|true|密码|
  
