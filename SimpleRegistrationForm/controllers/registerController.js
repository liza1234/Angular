angular.module("myApp").controller("registerController",
    function($scope){
      /* $scope.firstName= "xyz";
        $scope.lastName= "xyz";
       $scope.email="xyz@gmail.com"
       $scope.password="1234";
        */


        $scope.register = function() {
            console.log($scope.firstName);
            console.log($scope.lastName);
            console.log($scope.dob);
            console.log($scope.email);
            console.log($scope.password)


        }

    });