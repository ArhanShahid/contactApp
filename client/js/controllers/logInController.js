contactApp.controller("logInController",function($rootScope,$scope,authenticationService,$location,alertService) {

    $scope.logIn = function(user) {
        console.log('user');
        console.log(user);
        var validation = user != undefined && user.name && user.password;
        if (validation) {
            var logInResponse = authenticationService.logIn(user);
            if (logInResponse) {
                $location.path('/contact');
                $rootScope.user = user;
                alertService.show("Login Successful", "success");
            } else {
                alertService.show("Incorrect Username or Password", "danger");
            }
        }else{
            alertService.show("Empty Field", "danger");
        }
    }
});
