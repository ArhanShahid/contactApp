contactApp.controller("logInController",function($rootScope,$scope,authenticationService,$location,$localStorage,alertService) {

    $scope.logIn = function(user) {
        var validation = user != undefined && user.name && user.password;

        if (validation) {
            var logInResponse = authenticationService.logIn(user);
            if (logInResponse) {
                $rootScope.user.isLogin = true ;
                $localStorage.user = user;
                alertService.show("Login Successful", "success");
                console.log('user');
                console.log(user);
                $location.path('/contact');
            } else {
                alertService.show("Incorrect Username or Password", "danger");
            }
        }else{
            alertService.show("Empty Field", "danger");
        }

    };


});
