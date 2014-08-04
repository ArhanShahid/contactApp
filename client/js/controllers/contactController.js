contactApp.controller('contactController',function($scope,$location,editService){

    $scope.contacts = [
        { name:'A',phone:03330000000},
        { name:'B',phone:03330000001},
        { name:'C',phone:03330000002},
        { name:'D',phone:03330000003},
        { name:'E',phone:03330000004},
        { name:'F',phone:03330000005},
        { name:'G',phone:03330000006},
        { name:'H',phone:03330000007},
        { name:'I',phone:03330000008},
        { name:'J',phone:03330000009},
        { name:'L',phone:03330000010},
        { name:'M',phone:03330000011},
        { name:'N',phone:03330000012},
        { name:'O',phone:03330000013},
        { name:'P',phone:03330000014},
        { name:'Q',phone:03330000015},
        { name:'R',phone:03330000016},
        { name:'S',phone:03330000017},
        { name:'T',phone:03330000018},
        { name:'U',phone:03330000019},
        { name:'V',phone:03330000020},
        { name:'W',phone:03330000021},
        { name:'X',phone:03330000022},
        { name:'Y',phone:03330000023},
        { name:'Z',phone:03330000024}
    ];

    $scope.edit = function(contact){
        editService.setEditObject(contact);
        $location.path('/edit');
    }
});
