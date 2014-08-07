exports = module.exports = function(app, mongoose) {

    app.api.signUp = function(req, res) {

        app.api.callback.res = res;
        var validationNotEmpty = req.body.name && req.body.email && req.body.dob && req.body.password;
        var validationNotUndefined = req.body.name != undefined && req.body.email != undefined && req.body.dob != undefined && req.body.password != undefined;

//        if(app.api.regexStringValidator(req.body.name.toLocaleString())){
//
//
//
//        }



        if(validationNotEmpty && validationNotUndefined){
            console.log('SignUp From Server Work - Log');

            var user = new app.db.models.User({
                name:req.body.name,
                email:req.body.email,
                dob:req.body.dob,
                password:req.body.password
            });

            user.save(function(err,responce){
                if (err) {
                    res.send(err);
                }
                app.api.callback(err,responce);
            });
        }
        else{
            console.log('Empty or Invalid Data Field - Log');
            app.api.callback("Empty or Invalid Data Field");
        }

    };

};