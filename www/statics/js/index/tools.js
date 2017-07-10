var app=angular.module("tools",[]);
app.config(['$locationProvider', function($locationProvider) {  
    $locationProvider.html5Mode({
      	enabled: true,
      	requireBase: false
    });
}]);
app.controller('tools', function($scope) {
	$scope.tools = [{"name":"哈希/散列加密","link":"/tools/hashEncrypt"},
					{"name":"Base64加密/解密","link":"/tools"},
					{"name":"URL加密/解密","link":"/tools"}];
});