exports = module.exports = function(app, mongoose) {

    app.api.login = function(req,res) {

        app.api.callback.res = res;
        var validation = req.body.user && req.body.pass && req.body.pass != undefined && req.body.user != undefined;
        if(validation) {
            app.db.models.User.findOne({'name':req.body['user'],'password':req.body['pass']},function(err,userObject){
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
