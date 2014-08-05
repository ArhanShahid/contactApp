contactApp.service('authenticationService',function(requestService){
    var userName = "abc";
    var userPasswrod = 123;

    var _authentication =function(user){

        requestService.reqLogIn(user.name,user.password);

        if(user.name == userName && user.password == userPasswrod){

            return true;
        }else{
            return false;
        }
    };
    var _signUp = function(user){
        return true;
    };

    return{
        logIn: _authentication,
        signUp: _signUp
    }
});
