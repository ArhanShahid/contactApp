contactApp.controller('appController',function($rootScope,$location,$localStorage){

    $rootScope.user = {
        isLogin : false,
        name:null,
        password:null
    };

    $rootScope.logOut = function(){
        $rootScope.user = {
            isLogin : false,
            name:null,
            password:null
        };
        delete $localStorage.user;
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
                $rootScope.user = {
                    isLogin : user.isLogin,
                    name:user.name,
                    password:user.password
                };
            }
        }
    }
    refresh();

});