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
		alert("buttonMD5");
		$http.get('http://api.minglechang.com/tools/ip'
            ).then(
            	function successCallback(response) {
            		alert("success " + response.data.message);
  				}, 
  				function errorCallback(response) {
					alert("error " + response.status);
  				}
  			);
	}
	$scope.buttonSHA1 = function () {
		alert("buttonSHA1");
	}
	$scope.buttonSHA224 = function () {
		alert("buttonSHA224");
	}
	$scope.buttonSHA256 = function () {
		alert("buttonSHA256");
	}
	$scope.buttonSHA384 = function () {
		alert("buttonSHA384");
	}
	$scope.buttonSHA512 = function () {
		alert("buttonSHA512");
	}
});