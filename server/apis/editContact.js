exports = module.exports = function(app, mongoose) {

    app.api.editContact = function(req, res) {

        app.api.callback.res = res;

        var validationNotEmpty = req.body.name && req.body.phone && req.params.contactId;
        var validationNotUndefined = req.body.phone != undefined && req.body.phone != undefined && req.params.contactId != undefined;

        if(validationNotEmpty && validationNotUndefined){

        }
        else{
            console.log('Empty or Invalid Data Field - Log');
            app.api.callback("Empty or Invalid Data Field");
        }

    };

};