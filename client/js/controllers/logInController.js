contactApp.controller("logInController",function($scope,logInService,$location,alertService) {



    $scope.logIn = function(user){
        var logInResponce =  logInService.logIn(user);
        if(logInResponce){
            $location.path('/contact');
            alertService.show("Login Successful","success");
            console.log("Login Success form Controller : "+logInResponce);
        }else{
            alertService.show("Incorrect Username or Password","danger");
            console.log("Login Fail form Controller : "+logInResponce);
        }

    }
});
