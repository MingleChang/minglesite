var app=angular.module("udidResult",[]);
app.config(['$locationProvider', function($locationProvider) {  
    $locationProvider.html5Mode({
      	enabled: true,
      	requireBase: false
    });
}]);
app.controller('udidResult', function($scope, $location) {
    $scope.device =$location.search().PRODUCT;
    $scope.udid =$location.search().UDID;
    $scope.copyClick = function () {
    	alert($scope.udid);
    }
}); 