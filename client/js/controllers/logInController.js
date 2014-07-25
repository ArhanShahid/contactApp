contactApp.controller("logInController",function($scope) {

    $scope.logIn = function(user){
        console.info("User :"+user.name);
        console.info("Password :"+user.password);
    }
});
