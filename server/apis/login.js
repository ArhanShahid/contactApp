exports = module.exports = function(app, mongoose) {

    app.api.login = function(req,res) {

        app.api.dbCallback.res = res;
        var validation = req.body.user && req.body.pass && req.body.pass != undefined && req.body.user != undefined;
        if(validation) {

            app.db.models.User.findOne({'name':req.body['user'],'password':req.body['pass']},function(err,userObject){
                if(err || (userObject && userObject.length==0) || !userObject){
                    app.api.dbCallback(err || "Invalid User or Password");
                    //res.json({Success: false, code: -1, Message: "Invalid User or Password"});
                }else {
                    app.api.dbCallback(err,userObject);
                    //res.json({Success: true, code: 1, userObject:userObject});
                }
            });
        }
        else{
            console.log('Empty or Invalid Data Field - Log');
            res.json({Success: false, code: -1, Message: "Empty or Invalid Data Field"})
        }
    };

};
