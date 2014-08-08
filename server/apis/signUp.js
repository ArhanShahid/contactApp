exports = module.exports = function(app, mongoose) {

    app.api.signUp = function(req, res) {

        app.api.callback.res = res;

        var validationNotEmpty = req.body.name && req.body.email && req.body.dob && req.body.password && !req.body.contact;
        var validationNotUndefined = req.body.name != undefined && req.body.email != undefined && req.body.dob != undefined && req.body.password != undefined && req.body.contact == undefined ;
        var userName = req.body.name.toLowerCase();
        var validationUserName = app.api.regexStringValidator(userName);

        if(validationNotEmpty && validationNotUndefined){

            if (validationUserName) {

                app.db.models.User.findOne({name:userName},function(err,userObject){

                    if(err){
                        app.api.callback(err);
                    }
                    else if(userObject && userObject.name){
                        console.log("User ID already exists, Please select different ID - Log");
                        app.api.callback("User ID already exists, Please select different ID");
                    }else{

                        console.log('SignUp From Server Work - Log');
                        var user = new app.db.models.User({
                            name: req.body.name,
                            email: req.body.email,
                            dob: req.body.dob,
                            password: req.body.password
                        });
                        user.save(function (err, userObject) {
                            if (err) {
                                res.send(err);
                            }
                            app.api.callback(err, userObject);
                        });

                    }
                });
            }
            else {
                console.log("Invalid ID format, Please follow the instruction to create ID - Log");
                app.api.callback("Invalid ID format, Please follow the instruction to create ID");
            }
        }else {
            console.log("Empty or Invalid Data Field - Log");
            app.api.callback("Empty or Invalid Data Field");
        }
    };

};