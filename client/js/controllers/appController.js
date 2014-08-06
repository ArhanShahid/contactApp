contactApp.controller('appController',function($rootScope,$location,$localStorage){

    $rootScope.user = {
        id:null,
        name:null,
        email:null,
        password:null,
        dob:null,
        contact:null,
        isLogin : false
    };

    $rootScope.logOut = function(){
        $rootScope.user = {
            id:null,
            name:null,
            email:null,
            password:null,
            dob:null,
            contact:null,
            isLogin : false
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
                    id:user.id,
                    name:user.name,
                    email:user.email,
                    password:user.password,
                    dob:user.dob,
                    contact:user.contact,
                    isLogin : user.isLogin
                };
                console.log("Refresh");
                console.log(user);
            }else{
                $location.path('contact');
            }
        }
    }
    refresh();

});