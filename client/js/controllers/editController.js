contactApp.controller('editController',function($scope,dataService,alertService,$location,requestService){

    var edit = dataService.getEditObject();

    $scope.editContact = "Edit Contact";
    $scope.editObject = edit;
    console.log("Edit Object");
    console.log(edit);

    $scope.saveContact = function(contact){

        var contactValid = contact != undefined && contact.name && contact.phone;
        if(contactValid){

            requestService.reqEditContact(contact,function(responseObject){
                if(responseObject.code == 1 && responseObject.success == true){
                    alertService.show("Contact Edited Successfully", "success");
                    $location.path('contact');
                }else{
                    alertService.show(responseObject.error, "danger");
                }
            });
        }else{
            alertService.show("Empty Field", "danger");
        }
    };

    $scope.deleteContact = function(contact){
        requestService.reqDeleteContact(contact,function(responseObject){
            if(responseObject.code == 1 && responseObject.success == true){
                alertService.show("Contact Deleted Successfully", "success");
                $location.path('contact');
            }else{
                alertService.show(responseObject.error, "danger");
            }
        });
    };


    $scope.goToContact =function(){
        $location.path('contact');
    }

});

