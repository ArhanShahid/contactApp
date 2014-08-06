exports = module.exports = function(app, mongoose) {
    app.api = {};

    /*=====================================================*/

    app.api.login = function(req,res) {
        var userName = 'abc';
        var userPass = 123;
        var validation = req.body.user && req.body.pass && req.body.pass != undefined && req.body.user != undefined;
        if(validation) {
            if (userName == req.body.user && userPass == req.body.pass) {
                console.log('Login From Server Work - Log');
                res.json({Success: true, code: 1, Message: "Login From Server Work :)"})
            } else {
                console.log('Login From Server Fail - Log');
                res.json({Success: false, code: -1, Message: "Login From Server Fail :("})

            }
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



            user.create({
                name:req.body.name,
                email:req.body.email,
                dob:req.body.dob,
                password:req.body.password
            },function(err,resp){
                if (err) {
                    res.send(err);
                }
                res.json({
                    Success: true,
                    code: 1,
                    Message: "SignUp From Server Work",
                    resp:resp
                })
            });









//            res.json({
//                Success: true,
//                code: 1,
//                Message: "SignUp From Server Work",
//                name:req.body.name,
//                email:req.body.email,
//                dob:req.body.dob,
//                password:req.body.password
//            })
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