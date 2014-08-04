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
        $location.path('/home/login');
    };

    function refresh(){
        var user = $localStorage.user;
        if(user.name !=null && user.password!=null){
            $rootScope.user = {
                isLogin : user.isLogin,
                name:user.name,
                password:user.password
            };
        }
    }
    refresh();

});