contactApp.controller('contactController',function($rootScope,$scope,$location,dataService,requestService,alertService){

    $scope.noContactSave = true;

    requestService.reqGetContact(function(responseObject){
        if(responseObject.code==1 && responseObject.success == true) {
            var contacts = responseObject.responseData;
            if(contacts.length > 0){
                $scope.noContactSave = true;
                dataService.setContacts(contacts);
                $scope.contacts = dataService.getContacts();

            }else{
                $scope.noContactSave = false;
            }

        }else{
            alertService.show(responseObject.error, "danger");
        }
    });

    $scope.edit = function(contact){
        dataService.setEditObject(contact);
        $location.path('/edit');
    }
});
