contactApp.controller("logInController",function($rootScope,$scope,authenticationService,$location,$localStorage,alertService) {

    $scope.logIn = function(user) {

        delete $localStorage.user;

        var validation = user != undefined && user.name && user.password;

        if (validation) {
            authenticationService.logIn(user,function(loginResponse){
                if (loginResponse) {

                    var userObject = loginResponse.userObject;

                    $rootScope.user ={
                        id : userObject._id,
                        name : userObject.name,
                        email: userObject.email,
                        password : userObject.password,
                        dob : userObject.dob,
                        contact : userObject.contact,
                        isLogin : true
                    };

                    $localStorage.user = $rootScope.user;

                    alertService.show("Login Successful", "success");
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
