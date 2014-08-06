contactApp.controller("logInController",function($rootScope,$scope,authenticationService,$location,$localStorage,alertService) {

    $scope.logIn = function(user) {

        delete $localStorage.user;

        var validation = user != undefined && user.name && user.password;

        if (validation) {
            authenticationService.logIn(user,function(loginResponse){
                if (loginResponse) {

                    var userObject = loginResponse.userObject;

                    $rootScope.user.isLogin = true ;
                    $localStorage.user = userObject;
                    alertService.show("Login Successful", "success");
                    console.log('Login Successful User Object');
                    console.log(userObject);
                    $location.path('/contact');
                }
                else {
                    alertService.show("Incorrect Username or Password", "danger");
                }
            });

        }else{
            alertService.show("Empty Field", "danger");
        }

    };


});
