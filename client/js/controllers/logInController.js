contactApp.controller("logInController",function($rootScope,$scope,authenticationService,$location,$localStorage,alertService) {

    $scope.logIn = function(user) {

        delete $localStorage.user;

        var validation = user != undefined && user.name && user.password;

        if (validation) {
            authenticationService.logIn(user,function(loginResponse,responseObject){
                if (loginResponse) {

                    $rootScope.user ={
                        id : responseObject._id,
                        name : responseObject.name,
                        email: responseObject.email,
                        password : responseObject.password,
                        dob : responseObject.dob,
                        contact : responseObject.contact,
                        isLogin : true
                    };

                    $localStorage.user = $rootScope.user;

                    alertService.show("Login Successful", "success");
                    $location.path('/contact');
                }
                else {
                    alertService.show(responseObject, "danger");
                }
            });

        }else{
            alertService.show("Empty Field", "danger");
        }

    };


});
