exports = module.exports = function(app, mongoose) {

    app.api.deleteContact = function(req, res) {
        app.api.callback.res = res;

        var validationNotEmpty =  req.params.userId && req.params.contactId;
        var validationNotUndefined =  req.params.userId != undefined && req.params.contactId != undefined;

        if(validationNotEmpty && validationNotUndefined){

            app.db.models.Contact.findOne({owner:req.params.userId,_id:req.params.contactId},function(err,contactObject){

                if(err){
                    app.api.callback(err);
                }
                else if(!(contactObject && contactObject._id)){
                    console.log('Contact Not Found - Log');
                    app.api.callback("Contact Not Found");
                }else{
                    contactObject.remove(function(err,deleteResponse){
                        if(err){
                            res.send(err)
                        }else {

                            app.db.models.User.findOne({_id: req.params.userId}, function (err, UserObject) {

                                if (err) {
                                    app.api.callback(err);
                                }
                                else if (!(UserObject && UserObject._id)) {
                                    console.log('Invalid User or Password - Log');
                                    app.api.callback("Invalid User or Password");
                                } else {

                                    var contacts = UserObject.contact;
                                    var index = contacts.indexOf(req.params.contactId);
                                    contacts.splice(index,1);
                                    UserObject.contact = contacts;
                                    UserObject.save();

                                    app.api.callback(err,"Contact Deleted successfully")
                                }
                            });
                        }
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
