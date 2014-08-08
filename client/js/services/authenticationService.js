contactApp.service('authenticationService',function(requestService){

    var _authentication =function(user,callback){

        requestService.reqLogIn(user,function(res){

            if(res.code==1 && res.success == true){
                callback(true,res.responseData);
            }else{
                callback(false,res.error);
            }
        });
    };
    var _signUp = function(user,callback){
        requestService.reqSignUp(user,function(res){
            if(res.code==1 && res.success == true){
                callback(true,res.responseData);
            }else{
                callback(false,res.error);
            }
        })
    };

    return{
        logIn: _authentication,
        signUp: _signUp
    }
});
