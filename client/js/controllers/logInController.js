contactApp.controller("logInController",function($scope,authenticationService,$location,alertService) {

    $scope.logIn = function(user){
        var logInResponse =  authenticationService.logIn(user);
        if(logInResponse){
            $location.path('/contact');
            alertService.show("Login Successful","success");
        }else{
            alertService.show("Incorrect Username or Password","danger");
        }
    }
});
