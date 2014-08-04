contactApp.service('editService',function(){

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
        setEditObject:_setEditObj
    }
});

