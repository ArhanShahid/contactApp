contactApp.controller('addController',function($rootScope,$scope,$location,alertService,requestService){
    $scope.addContact = "Add Contact";
    $scope.saveContact = function(contact){

        var contactValid = contact != undefined && contact.name && contact.phone;
        if(contactValid){
            requestService.reqAddContact(contact,function(responseObject){
                if(responseObject.code==1 && responseObject.success == true){
                    alertService.show("Contact Added Successfully", "success");
                    $location.path('contact');
                }else{
                    alertService.show(responseObject.error, "danger");
                }
            });
        }else{
            alertService.show("Empty Field", "danger");
        }
    };
    $scope.goToContact =function(){
        $location.path('contact');
    }
});
