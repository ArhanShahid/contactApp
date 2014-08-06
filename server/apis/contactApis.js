module.exports = function(app, mongoose) {
    app.api = {};
    // var contact = require('./models/contact');
    /*=====================================================*/

    app.api.login = function(req,res) {
        var userName = 'abc';
        var userPass = 123;
        var validation = req.body.user && req.body.pass && req.body.pass != undefined && req.body.user != undefined;
        if(validation) {
            if (userName == req.body.user && userPass == req.body.pass) {
                console.log('Login From Server Work Log');
                //res.send("Login From Server Work :)");
                res.json({Success: true, code: 1, Message: "Login From Server Work :)"})
            } else {
                console.log('Login From Server Fail Log');
                //res.send("Login From Server Fail :(");
                res.json({Success: false, code: -1, Message: "Login From Server Fail :("})

            }
        }
        else{
            res.json({Success: false, code: -1, Message: "Empty or Invalid Data"})
        }
    };

    /*=====================================================*/

    app.api.signUp = function(req, res) {
        console.log("signUp");
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