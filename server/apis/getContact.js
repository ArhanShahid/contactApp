exports = module.exports = function(app, mongoose) {

    app.api.getContact = function(req, res) {

        app.api.callback.res = res;

        var validationNotEmpty = req.params.userId;
        var validationNotUndefined = req.params.userId != undefined;

        if(validationNotEmpty && validationNotUndefined){

            app.db.models.User.findOne({_id:req.params.userId},function(err,userObject){
                if(err){
                    app.api.callback(err);
                }
                else if(!(userObject && userObject._id)){
                    console.log('Invalid User or Password - Log');
                    app.api.callback("Invalid User or Password");
                }else{

                    app.db.models.Contact.find({owner:userObject._id},function(err,contacts) {
                        if (err) {
                            app.api.callback(err);
                        }
                        app.api.callback(err, contacts);
                    });
                }
            });
        }
        else{
            console.log('Empty or Invalid Data Field - Log');
            app.api.callback("Empty or Invalid Data Field");
        }

    };

};
