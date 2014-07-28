contactApp.controller('signUpController',function($scope,authenticationService,$location,alertService){
    $scope.logIn = "Welcome To Sign Up";



    $scope.signUp =function(user){
        console.log("Sign Up");
        console.log(user);

        var validation = user != undefined && user.name && user.email && user.dob && user.password && user.confirmPassword;
        if(validation) {
            if (user.password != user.confirmPassword) {
                alertService.show("Incorrect Password", "danger");
            } else {
                var signUpResponse = authenticationService.signUp(user);
                if (signUpResponse) {
                    alertService.show("Sign Up", "success");
                    $location.path('/contact');
                } else {
                    alertService.show("Unable to Sign Up", "danger");
                }
            }
        }else{
            alertService.show("Empty Field", "danger");
        }
    }
});
