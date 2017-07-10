var app=angular.module("hashEncrypt",[]);
app.config(['$locationProvider', function($locationProvider) {  
    $locationProvider.html5Mode({
      	enabled: true,
      	requireBase: false
    });
}]);
// app.config(['$sceDelegateProvider', function ($sceDelegateProvider) {
// 	$sceDelegateProvider.resourceUrlWhitelist([
// 		'self',
// 		'http://api.minglechang.com/**'
// 		]);
// }]);
// app.config(['$qProvider', function ($qProvider) {
//     $qProvider.errorOnUnhandledRejections(false);
// }]);
app.controller('hashEncrypt', function($http,$scope) {
	$scope.buttonMD5 = function () {
		encrypt($scope.sourceText, 'md5');
	}
	$scope.buttonSHA1 = function () {
		encrypt($scope.sourceText, 'sha1');
	}
	$scope.buttonSHA224 = function () {
		encrypt($scope.sourceText, 'sha224');
	}
	$scope.buttonSHA256 = function () {
		encrypt($scope.sourceText, 'sha256');
	}
	$scope.buttonSHA384 = function () {
		encrypt($scope.sourceText, 'sha384');
	}
	$scope.buttonSHA512 = function () {
		encrypt($scope.sourceText, 'sha512');
	}

	function encrypt(source,method,password) {
		var url = "http://api.minglechang.com/tools/hashEncrypt";
		url = url + '?source=' + source;
		url = url + '&method=' + method;
		if (password) {
			url = url + '&password=' + password;
		}
		$http.get(url
            ).then(
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