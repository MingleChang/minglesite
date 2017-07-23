#Tools

* **host：** api.minglechang.com  
* **rootPath：** /tools

##ip
* **接口说明：** 查看客户端ip相关信息  
* **接口Path：** /ip  
* **请求方式：** GET
* **传入参数：**

|参数|类型|必填|说明|
|:-:|:-:|:-:|:-:|
|ip|string|否|需要查询的ip，默认为客户端ip|

* **返回数据：**

|参数|类型|说明|
|:-:|:-:|:-:|
|country|string|国家|
|country_id|string|国家编号|
|area|string|区域|
|area_id|string|区域编号|
|region|string|地区|
|region_id|string|地区编号|
|city|string|城市|
|city_id|string|城市编号|
|county|string|区县|
|county|string|区县编号|
|isp|string|运营商|
|isp_id|string|运营商编号|
|ip|string|ip地址|

##datetime
* **接口说明：** 获取服务器时间  
* **接口Path：** /datetime
* **请求方式：** GET
* **传入参数：** 无

* **返回数据：**

|参数|类型|说明|
|:-:|:-:|:-:|
|timestamp|number|时间戳|