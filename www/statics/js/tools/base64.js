var app=angular.module("base64",[]);
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

app.controller('base64', function($http,$scope) {
	$scope.encrypt = encrypt;
	$scope.decrypted = decrypted;
	$scope.clear = clear;
	function encrypt() {
		encryptOrDecrypted($scope.sourceText, 'encrypt', function (result) {
			$scope.encryptText = result;
		});
	}

	function decrypted() {
		encryptOrDecrypted($scope.encryptText, 'decrypted', function (result) {
			$scope.sourceText = result;
		});
	}

	function clear() {
		$scope.sourceText = '';
		$scope.encryptText = '';
	}


	function encryptOrDecrypted(value, method, callback) {
		let url = "http://api.minglechang.com/tools/base64";

		let params = {value:value, method:method};
		// params = JSON.stringify(params);
		let request = {method:'POST',
						url:url,
						headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
						data:params};

		$http(request).then (
			function successCallback(response) {
				if (response.data.code == 200) {
					callback(response.data.result.result);
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