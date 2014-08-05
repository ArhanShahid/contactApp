module.exports = function(app, mongoose) {
    app.api = {};
   // var contact = require('./models/contact');
    /*=====================================================*/

    app.api.login = function(req, res) {
       console.log("LogIn");
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