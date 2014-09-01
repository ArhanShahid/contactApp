contactApp.controller('changePasswordController',function($rootScope,$scope,$location,alertService,requestService) {
    $scope.changePasswordHeading = "Change Password";
    $scope.user = '';
    $scope.changePassword = function(user){
        requestService.reqChangePassword(user,function(responseObject){
            if(responseObject.code == 1 && responseObject.success == true){
                alertService.show("Password Changed Successfully", "success");
                $location.path('contact');
            }else{
                alertService.show(responseObject.error, "danger");
            }
        })
    };

    $scope.goToContact =function(){
        $location.path('contact');
    }
});
