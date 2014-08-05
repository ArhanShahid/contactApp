
var contact = require('./models/contact');

module.exports = function(app) {

    // User LogIn
    app.get('/api/login', app.api.login);

    // User signUp
    app.get('/api/signUp', app.api.signUp);

    // Change User Password
    app.get('/api/:user_id/changePassword', app.api.changePassword);

    // Edit User Account
    app.get('/api/:user_id/editAccount', app.api.editAccount);

    /*======================================================*/

    // Get All User Contact
    app.get('/api/:user_id/getContact', app.api.getContact);

    // Add Contact
    app.get('/api/:user_id/addContact', app.api.addContact);

    // Edit Contact
    app.get('/api/:user_id/editContact/:contact_id', app.api.editContact);

    // Delete Contact
    app.get('/api/:user_id/deleteContact/:contact_id', app.api.deleteContact);

    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};