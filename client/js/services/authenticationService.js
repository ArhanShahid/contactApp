contactApp.service('authenticationService',function(requestService){

    var _authentication =function(user,callback){

        requestService.reqLogIn(user,function(res){

            if(res.code==1 && res.Success == true){
                callback(true);
            }else{
                callback(false);
            }
        });
    };
    var _signUp = function(user){
        return true;
    };

    return{
        logIn: _authentication,
        signUp: _signUp
    }
});
