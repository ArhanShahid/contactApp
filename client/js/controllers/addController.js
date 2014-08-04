contactApp.controller('addController',function($rootScope,$scope,$location,alertService){
    $scope.addContact = "Add Contact";
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
