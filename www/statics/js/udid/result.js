var app=angular.module("result",[]);
app.config(['$locationProvider', function($locationProvider) {  
    $locationProvider.html5Mode({
      	enabled: true,
      	requireBase: false
    });
}]);
app.controller('result', function($scope, $location) {
    $scope.device = $location.search().PRODUCT;
    $scope.imei = $location.search().IMEI;
    $scope.version = $location.search().VERSION;
    $scope.udid = $location.search().UDID;
    if (! $scope.udid) {
        window.location.href = '/udid';
        // $location.path("/udid");
    }
    // $scope.copyClick = function () {
    // 	alert($scope.udid);
    // }
}); 