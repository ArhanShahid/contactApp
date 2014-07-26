contactApp.controller("logInController",function($scope,logInService,$location) {

    $scope.logIn = function(user){
        var logInResponce =  logInService.logIn(user);
        if(logInResponce){
            $location.path('/contact');
            console.log("Login Success form Controller : "+logInResponce);
        }else{
            console.log("Login Fail form Controller : "+logInResponce);
        }

    }
});
