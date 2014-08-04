contactApp.controller('editController',function($scope,editService){

    var edit = editService.getEditObject();

    $scope.editObject = edit;
//    $scope.edit = {
//        name:null,
//        phone:null
//    };
//
//    $scope.edit = function(contact){
//        $scope.edit = {
//            name:contact.name,
//            phone:contact.phone
//        };
//    }


});

