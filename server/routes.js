
var contact = require('./models/contact');

module.exports = function(app) {

    // User LogIn
    app.post('/api/login', app.api.login);

    // User signUp
    app.get('/api/signUp', app.api.signUp);

    // Change User Password
    app.get('/api/:userId/changePassword', app.api.changePassword);

    // Edit User Account
    app.get('/api/:userId/editAccount', app.api.editAccount);

    /*======================================================*/

    // Get All User Contact
    app.get('/api/:userId/getContact', app.api.getContact);

    // Add Contact
    app.get('/api/:userId/addContact', app.api.addContact);

    // Edit Contact
    app.get('/api/:userId/editContact/:contactId', app.api.editContact);

    // Delete Contact
    app.get('/api/:userId/deleteContact/:contactId', app.api.deleteContact);

    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};