contactApp.service('dataService',function($rootScope){

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

    var editObj = {
        name:null,
        phone:null
    };

    var _setEditObj = function(obj){
        editObj = {
            name:obj.name,
            phone:obj.phone
        };
    };
    var _getEditObj = function(){
        return editObj;
    };

    return{
        getEditObject:_getEditObj,
        setEditObject:_setEditObj,
        setRootScoop:_setRootScoop,
        resetRootScoop:_resetRootScoop
    }
});

