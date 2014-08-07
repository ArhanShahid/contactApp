exports = module.exports = function(app, mongoose) {

    app.api.changePassword = function(req, res) {

        app.api.callback.res = res;

        var validationNotEmpty = req.body.name && req.body.password && req.body.newPassword && req.params.userId;
        var validationNotUndefined = req.body.password != undefined && req.body.name != undefined && req.body.newPassword !=undefined && req.params.userId != undefined;

        if(validationNotEmpty && validationNotUndefined){

            app.db.models.User.findOne({_id:req.params.userId},function(err,userObject){
                if(err){
                    app.api.callback(err);
                }
                else if(!(userObject && userObject._id)){
                    console.log('Invalid User or Password - Log');
                    app.api.callback("Invalid User or Password");
                }else{
                    var matchName = req.body.name === userObject.name;
                    var matchPassword = req.body.password === userObject.password;

                    if(!(matchName && matchPassword)){
                        console.log('Invalid User or Password - Log');
                        app.api.callback("Invalid User or Password");
                    }else{
                        userObject.password = req.body.newPassword;
                        userObject.save(function(err,userObject){

                            if(err){
                                app.api.callback(err);
                            }
                            app.api.callback(err, userObject);
                        });
                    }
                }
            });
        }
        else{
            console.log('Empty or Invalid Data Field - Log');
            app.api.callback("Empty or Invalid Data Field");
        }
    };

};
