exports = module.exports = function(app, mongoose) {

    app.api.login = function(req,res) {

        app.api.callback.res = res;

        var validationNotEmpty = req.body.name && req.body.password;
        var validationNotUndefined = req.body.password != undefined && req.body.name != undefined;

        if(validationNotEmpty && validationNotUndefined ) {
            app.db.models.User.findOne({'name':req.body['name'],'password':req.body['password']},function(err,userObject){
                if(err || (userObject && userObject.length==0) || !userObject){
                    app.api.callback(err || "Invalid User or Password");
                }else {
                    app.api.callback(err,userObject);
                }
            });
        }
        else{
            console.log('Empty or Invalid Data Field - Log');
            app.api.callback("Empty or Invalid Data Field");
        }
    };

};
