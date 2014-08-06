exports = module.exports = function(app, mongoose) {
    app.api = {};

    /*=====================================================*/

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

    /*=====================================================*/

    app.api.signUp = function(req, res) {
        var validationNotEmpty = req.body.name && req.body.email && req.body.dob && req.body.password;
        var validationNotUndefined = req.body.name != undefined && req.body.email != undefined && req.body.dob != undefined && req.body.password != undefined;
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
                res.json(responce)
            });
        }
        else{
            console.log('Empty or Invalid Data Field - Log');
            res.json({Success: false, code: -1, Message: "Empty or Invalid Data Field"});
        }

    };

    /*=====================================================*/

    app.api.changePassword = function(req, res) {
        console.log("Change Password");
    };

    /*=====================================================*/

    app.api.editAccount = function(req, res) {
        console.log("Edit Account");
    };

    /*=====================================================*/
    /*=====================================================*/
    /*=====================================================*/

    app.api.getContact = function(req, res) {
        console.log("Get Contact");
    };

    /*=====================================================*/

    app.api.addContact = function(req, res) {
        console.log("Add Contact");
    };

    /*=====================================================*/

    app.api.editContact = function(req, res) {
        console.log("Edit Contact");
    };

    /*=====================================================*/

    app.api.deleteContact = function(req, res) {
        console.log("Delete Contact");
    };

};