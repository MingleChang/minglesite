var app=angular.module("hashEncrypt",[]);
app.config(['$locationProvider', function($locationProvider) {  
    $locationProvider.html5Mode({
      	enabled: true,
      	requireBase: false
    });
}]);

app.config(function ($httpProvider) {
    $httpProvider.defaults.transformRequest = function(data){
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    }
});

app.controller('hashEncrypt', function($http,$scope) {
	$scope.visible = false;

	$scope.encrypts = [{'name':'MD5','method':'md5','isHmac':false},
						{'name':'SHA1','method':'sha1','isHmac':false},
						{'name':'SHA224','method':'sha224','isHmac':false},
						{'name':'SHA256','method':'sha256','isHmac':false},
						{'name':'SHA384','method':'sha384','isHmac':false},
						{'name':'SHA512','method':'sha512','isHmac':false},
						{'name':'HmacMD5','method':'md5','isHmac':true},
						{'name':'HmacSHA1','method':'sha1','isHmac':true},
						{'name':'HmacSHA224','method':'sha224','isHmac':true},
						{'name':'HmacSHA256','method':'sha256','isHmac':true},
						{'name':'HmacSHA384','method':'sha384','isHmac':true},
						{'name':'HmacSHA512','method':'sha512','isHmac':true},]
	$scope.buttonClick = function (item) {
		$scope.visible = item.isHmac;
		if (item.isHmac) {
			var password = $scope.password;
			if (!password) {
				password = '';
			}
			encrypt($scope.sourceText, item.method, password);
		}else {
			encrypt($scope.sourceText, item.method);
		}
	};

	$scope.clear = function () {
		$scope.sourceText = '';
		$scope.encryptText = '';
	};	

	function encrypt(source,method,password) {
		if (!source) {
			alert("请输入明文");
			return;
		}
		let url = "http://api.minglechang.com/tools/hashEncrypt";
		let params = {source:source, method:method};
		if (password != undefined) {
			params.password = password;
		}
		let request = {method:'POST',
						url:url,
						headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
						data:params};

		$http(request).then (
			function successCallback(response) {
				if (response.data.code == 200) {
					$scope.encryptText = response.data.result.result;
				}else {
					alert("服务器异常");
				}
			}, 
			function errorCallback(response) {
				alert("服务器异常");
			}
		);
	}
});