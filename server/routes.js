exports = module.exports = function(app) {

    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });
    // User LogIn
    app.post('/api/login', app.api.login);

    // User signUp
    app.post('/api/signUp', app.api.signUp);

    // Change User Password
    app.post('/api/:userId/changePassword', app.api.changePassword);

    // Edit User Account
    app.post('/api/:userId/editAccount', app.api.editAccount);

    /*======================================================*/

    // Get All User Contact
    app.get('/api/:userId/getContact', app.api.getContact);

    // Add Contact
    app.post('/api/:userId/addContact', app.api.addContact);

    // Edit Contact
    app.post('/api/:userId/editContact/:contactId', app.api.editContact);

    // Delete Contact
    app.delete('/api/:userId/deleteContact/:contactId', app.api.deleteContact);

    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};