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
            name:user.name,
            password:user.password
        },function(res){
            callback(res)
        });
    };

    var _reqSignUp = function(user,callback){
        signUp.save({
            name:user.name,
            email:user.email,
            dob:user.dob,
            password:user.password
        },function(res){
            callback(res)
        });
    };


    /*============================================================*/

    var _reqGetContact = function(callback){
        getContact.get({userId:$rootScope.user.id},function(res){
            callback(res);
        })
    };

    /*============================================================*/

    var _reqAddContact = function(contact,callback){
        addContact.save({
                userId:$rootScope.user.id
            },
            {
                name:contact.name,
                phone:contact.phone
            },
            function(res){
                callback(res);
            })
    };

    return{
        reqLogIn:_reqLogIn,
        reqSignUp:_reqSignUp,
        reqGetContact:_reqGetContact,
        'reqAddContact':_reqAddContact
    }

});
