contactApp.controller('editController',function($scope,editService,alertService,$location){

    var edit = editService.getEditObject();

    $scope.editContact = "Edit Contact";
    $scope.editObject = edit;

    $scope.saveContact = function(contact){

        var contactValid = contact != undefined && contact.name && contact.phone;
        if(contactValid){
            console.log('contact');
            console.log(contact);
            alertService.show("Contact Saved", "success");
        }else{
            alertService.show("Empty Field", "danger");
        }
    };
    $scope.goToContact =function(){
        $location.path('contact');
    }

});

