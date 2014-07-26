contactApp.service('logInService',function(){
    var userName = "abc";
    var userPasswrod = 123;

    return{
        logIn: function(user){
            if(user.name == userName && user.password == userPasswrod){
                return true;
            }else{
                return false;
            }
        }
    }
});
