contactApp.controller('appController',function($rootScope,$location,$localStorage,dataService){

    dataService.resetRootScoop();

    $rootScope.logOut = function(){

        dataService.resetRootScoop();
        delete $localStorage.user;
        delete $localStorage.contacts;
        $location.path('/home/login');
    };

    $rootScope.goToHome = function(){
        var user = $localStorage.user;
       if(user != undefined) {
           if (user.name != null && user.password != null) {
               $location.path('contact');
           }
       }else{
           $location.path('/home/login');
       }
    };

    function refresh(){
        var user = $localStorage.user;
        if(user != undefined){
            if(user.name !=null && user.password!=null){

                dataService.setRootScoop(user);
                dataService.getContacts();
                console.log("Refresh");
                console.log(user);
            }else{
                $location.path('contact');
            }
        }
    }
    refresh();

});