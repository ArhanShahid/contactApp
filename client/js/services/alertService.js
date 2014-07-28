contactApp.service('alertService',function($rootScope,$timeout){

    $rootScope.alert = {
        show:false,
        type:null,
        message:null
    };

    return{
        show:function(msg,type){
            var alertType = "alert alert-"+type;
            $rootScope.alert = {
                show:true,
                type:alertType,
                message:msg
            };
            $timeout(function() {
                $rootScope.alert = {
                    show:false,
                    type:null,
                    message:null
                };
            }, 2000);
        }
    }

});
