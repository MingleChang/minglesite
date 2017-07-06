var app=angular.module("index",[]);
app.config(['$locationProvider', function($locationProvider) {  
    $locationProvider.html5Mode({
      	enabled: true,
      	requireBase: false
    });
}]);
app.controller('index', function($scope) {
	if (/ip(hone|od|ad)/i.test(navigator.userAgent)){
		$scope.isShow = true;
	}else {
		$scope.isShow = false;
	}
});