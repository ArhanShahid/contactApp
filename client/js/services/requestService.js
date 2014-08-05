contactApp.factory('requestService',function(ajaxService,$rootScope){

    var login = ajaxService.logIn();
    var signUp =  ajaxService.signUp();
    var changePassword = ajaxService.changePassword();
    var editAccount = ajaxService.editAccount();
    var getContact =  ajaxService.getContact();
    var addContact = ajaxService.addContact();
    var editContact = ajaxService.editContact();
    var deleteContact = ajaxService.deleteContact();


    var _reqLogIn = function(user,callback){
        login.save({
            user:user.name,
            pass:user.password
        },function(res){
            callback(res)
        });
    };

    return{
        reqLogIn:_reqLogIn
    }

});
