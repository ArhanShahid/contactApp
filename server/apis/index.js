exports = module.exports = function(app,mongoose) {
    app.api = {};

    require('./login')(app,mongoose);
    require('./signUp')(app,mongoose);
    require('./changePassword')(app,mongoose);
    require('./editAccount')(app,mongoose);
    require('./getContact')(app,mongoose);
    require("./addContact")(app,mongoose);
    require('./editContact')(app,mongoose);
    require('./deleteContact')(app,mongoose);

};