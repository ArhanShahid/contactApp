contactApp.service('authenticationService',function(requestService,alertService){

    var _authentication =function(user,callback){

        requestService.reqLogIn(user,function(res){

            if(res.code==1 && res.success == true){
                console.log("Response from Server");
                console.log(res);
                callback(true,res.responseData);
            }else{
                console.log("Response from Server");
                console.log(res);
                callback(false,res.error);
            }
        });
    };
    var _signUp = function(user,callback){
        requestService.reqSignUp(user,function(res){
            if(res.code==1 && res.success == true){
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
