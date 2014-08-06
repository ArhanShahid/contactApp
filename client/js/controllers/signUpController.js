contactApp.controller('signUpController',function($rootScope,$scope,authenticationService,$location,alertService,$localStorage){

    $scope.signUp =function(user){
        console.log("Sign Up");
        console.log(user);
        var validationNotEmpty = user != undefined && user.name && user.email && user.dob && user.password && user.confirmPassword;

        if(validationNotEmpty) {
            if (user.password != user.confirmPassword) {
                alertService.show("Incorrect Password", "danger");
            } else {
                authenticationService.signUp(user,function(signUpResponse){
                    if (signUpResponse) {

                        var userObject = signUpResponse.userObject;

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

                        alertService.show("Sign Up", "success");
                        $location.path('/contact');
                    } else {
                        alertService.show("Unable to Sign Up", "danger");
                    }
                });
            }
        }else{
            alertService.show("Empty Field", "danger");
        }
    }
});
