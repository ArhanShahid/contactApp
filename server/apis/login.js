exports = module.exports = function(app, mongoose) {

    app.api.login = function(req,res) {

        var validation = req.body.user && req.body.pass && req.body.pass != undefined && req.body.user != undefined;
        if(validation) {

            app.db.models.User.find({'name':req.body['user'],'password':req.body['pass']},function(err,userObject){
                if(err || (userObject && userObject.length==0) || !userObject){
                    res.json({Success: false, code: -1, Message: "Invalid User or Password"});
                }else {
                    res.json({Success: true, code: 1, userObject:userObject});
                }
            });
        }
        else{
            console.log('Empty or Invalid Data Field - Log');
            res.json({Success: false, code: -1, Message: "Empty or Invalid Data Field"})
        }
    };

};
