contactApp.factory('ajaxService',function($resource,$rootScope){

    var _logIn = function(){
        return $resource('/api/login')
    };

    var _signUp = function(){
        return $resource('/api/signUp')
    };

    var _changePassword = function(){
        return $resource('/api/:userId/changePassword',{userId:'@id'})
    };

    var _editAccount = function(){
        return $resource('/api/:userId/editAccount',{userId:'@id'})
    };

    var _getContact = function(){
        return $resource('/api/:userId/getContact',{userId:'@id'})
    };

    var _addContact = function(){
        return $resource('/api/:userId/addContact',{userId:'@id'})
    };

    var _editContact = function(){
        return $resource('/api/:userId/editContact/:contactId',{userId:'@id',contactId:'@contactId'})
    };

    var _deleteContact = function(){
        return $resource('/api/:userId/deleteContact/:contactId',{userId:'@id',contactId:'@contactId'})
    };

    return{
        logIn:_logIn,
        signUp:_signUp,
        changePassword:_changePassword,
        editAccount:_editAccount,
        getContact:_getContact,
        addContact:_addContact,
        editContact:_editContact,
        deleteContact:_deleteContact

    }

});
