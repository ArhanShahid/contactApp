contactApp.controller("logInController",function($rootScope,$scope,authenticationService,$location,$localStorage,dataService,alertService) {

    $scope.logIn = function(user) {

        delete $localStorage.user;

        var validation = user != undefined && user.name && user.password;

        if (validation) {
            authenticationService.logIn(user,function(loginResponse,responseObject){
                if (loginResponse) {

                    dataService.setRootScoop(responseObject);

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
