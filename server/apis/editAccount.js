exports = module.exports = function(app, mongoose) {

    app.api.editAccount = function(req, res) {

        app.api.callback.res = res;

        var validationNotEmpty = req.body.name && req.body.email && req.body.dob && req.body.password && req.params.userId;
        var validationNotUndefined = req.body.name != undefined && req.body.email != undefined && req.body.dob != undefined && req.body.password != undefined && req.params.userId != undefined;

        if(validationNotEmpty && validationNotUndefined){

            app.db.models.User.findOne({_id:req.params.userId},function(err,userObject){

                if(err){
                    app.api.callback(err);
                }
                else if(!(userObject && userObject._id)){
                    console.log('Invalid User or Password - Log');
                    app.api.callback("Invalid User or Password");
                }else {

                    var matchPassword = req.body.password === userObject.password;
                    if (!matchPassword) {
                        console.log('Invalid User or Password - Log');
                        app.api.callback("Invalid User or Password");
                    }
                    else {
                        app.api.callback(err, userObject);
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
