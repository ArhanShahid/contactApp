contactApp.service('dataService',function($rootScope,$localStorage){

    var _setRootScoop = function(rootScope){
        $rootScope.user = {
            id : rootScope._id,
            name : rootScope.name,
            email: rootScope.email,
            password : rootScope.password,
            dob : rootScope.dob,
            contact : rootScope.contact,
            isLogin : true
        };
    };

    var _resetRootScoop = function(){
        $rootScope.user = {
            id:null,
            name:null,
            email:null,
            password:null,
            dob:null,
            contact:null,
            isLogin : false
        };

    };
    /*==========================================*/

    var _setContacts  = function(contacts){
        $rootScope.contacts = contacts;
        $localStorage.contacts = $rootScope.contacts;
    };
    var _getContacts  = function(){
        var contacts = $localStorage.contacts;
        $rootScope.contacts = contacts;
        console.log('var contacts = $localStorage.contacts;');
        console.log(contacts);
        return  contacts;
    };

    /*==========================================*/

    var editObj = {
        id:null,
        owner:null,
        name:null,
        phone:null
    };

    var _setEditObj = function(obj){
        editObj = {
            id:obj._id,
            owner:obj.owner,
            name:obj.name,
            phone:obj.phone
        };
    };
    var _getEditObj = function(){
        return editObj;
    };

    return{
        setRootScoop:_setRootScoop,
        resetRootScoop:_resetRootScoop,
        getEditObject:_getEditObj,
        setEditObject:_setEditObj,
        setContacts:_setContacts,
        getContacts:_getContacts
    }
});

