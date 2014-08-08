contactApp.controller('signUpController',function($rootScope,$scope,authenticationService,$location,alertService,$localStorage,dataService){

    $scope.signUp =function(user){
        console.log("Sign Up");
        console.log(user);
        var validationNotEmpty = user != undefined && user.name && user.email && user.dob && user.password && user.confirmPassword;

        if(validationNotEmpty) {
            if (user.password != user.confirmPassword) {
                alertService.show("Incorrect Password", "danger");
            } else {
                authenticationService.signUp(user,function(signUpResponse,responseObject){
                    if (signUpResponse) {

                        dataService.setRootScoop(responseObject);
                        $localStorage.user = $rootScope.user;
                        
                        alertService.show("Sign Up Successful", "success");
                        $location.path('/contact');
                    } else {
                        alertService.show(responseObject, "danger");
                    }
                });
            }
        }else{
            alertService.show("Empty Field", "danger");
        }
    }
});
