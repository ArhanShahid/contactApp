exports = module.exports = function(app, mongoose) {

    app.api.addContact = function(req, res) {

        app.api.callback.res = res;

        var validationNotEmpty = req.body.name && req.body.phone && req.params.userId;
        var validationNotUndefined = req.body.name != undefined && req.body.phone != undefined && req.params.userId != undefined;

        if(validationNotEmpty && validationNotUndefined){
            app.db.models.User.findOne({_id:req.params.userId},function(err,userObject){

                if(err){
                    app.api.callback(err);
                }else if(!(userObject && userObject._id)){
                    console.log("Invalid User or Password - Log");
                    app.api.callback("Invalid User or Password");
                }
                else{

                    app.db.models.Contact.find({name:req.body.name,owner:userObject._id},function(err,contactObject) {

                        if (err) {
                            app.api.callback(err);
                        } else if (contactObject.length > 0) {
                            console.log("Contact Name already exists, Please select different Name - Log");
                            app.api.callback("Contact Name already exists, Please select different Name");
                        }
                        else {
                            var contact = new app.db.models.Contact({
                                owner: req.params.userId,
                                name: req.body.name,
                                phone: req.body.phone
                            });
                            contact.save(function (err, contactObject) {
                                if (err) {
                                    res.send(err);
                                }
                                userObject.contact.push(contactObject._id);
                                userObject.save(function(err,userObject){
                                    if (err) {
                                        res.send(err);
                                    }
                                    app.api.callback(err, contactObject);
                                });
                            });
                        }
                    });
                }
            })
        }
        else{
            console.log("Empty or Invalid Data Field - Log");
            app.api.callback("Empty or Invalid Data Field");
        }
    };

};