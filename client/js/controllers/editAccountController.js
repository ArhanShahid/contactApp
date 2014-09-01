contactApp.controller('editAccountController',function($rootScope,$scope,$location,alertService,requestService) {
    $scope.editAccountHeading = "Edit Account";
    $scope.user = '';
    $scope.editAccount = function(user){
        requestService.reqEditAccount(user,function(responseObject){
            if(responseObject.code == 1 && responseObject.success == true){
                alertService.show("Account Edited Successfully", "success");
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
