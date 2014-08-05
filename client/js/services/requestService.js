contactApp.factory('requestService',function(ajaxService,$rootScope){

    var login = ajaxService.logIn();
    var signUp =  ajaxService.signUp();
    var changePassword = ajaxService.changePassword();
    var editAccount = ajaxService.editAccount();
    var getContact =  ajaxService.getContact();
    var addContact = ajaxService.addContact();
    var editContact = ajaxService.editContact();
    var deleteContact = ajaxService.deleteContact();


    var _reqLogIn = function(user,pass){
        console.log("Request Service LogIn");
        console.log("User : "+user+" Pass : "+pass);
        login.save({
            user:user,
            pass:pass
        });
    };

    return{
        reqLogIn:_reqLogIn
    }

});
