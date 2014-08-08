exports = module.exports = function(app,mongoose) {
    app.api = {};

    app.api.callback = function(error, responseData) {

        if (error) {
            console.log(error);
            app.api.callback.res.json({ error: error, code: -1, success: false});
        } else {
            console.log(responseData);
            app.api.callback.res.json({  responseData: responseData, code: 1, success: true });
        }
    };

    app.api.regexStringValidator = function(regStr){
        var con1 = /^[^0-9_]/.test(regStr);
        var con2 =!(/\W/.test(regStr));
        var bothFalse = con1 == false && con2 == false;
        if(bothFalse){
            return false;
        }else {
            return con1 === con2 ? true : false
        }
    };

    require('./login')(app,mongoose);
    require('./signUp')(app,mongoose);
    require('./changePassword')(app,mongoose);
    require('./editAccount')(app,mongoose);
    require('./getContact')(app,mongoose);
    require("./addContact")(app,mongoose);
    require('./editContact')(app,mongoose);
    require('./deleteContact')(app,mongoose);

};