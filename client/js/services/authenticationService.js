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
    var _signUp = function(user,callback){
        requestService.reqSignUp(user,function(res){
            if(res.code==1 && res.Success == true){
                console.log("Sign Up Resp Object");
                console.log(res);
                callback(true);
            }else{
                callback(false);
            }
        })
    };

    return{
        logIn: _authentication,
        signUp: _signUp
    }
});
