exports = module.exports = function(app, mongoose) {

    app.api.editContact = function(req, res) {

        app.api.callback.res = res;

            var validationNotEmpty = req.body.name && req.body.phone && req.params.userId && req.params.contactId;
            var validationNotUndefined = req.body.name != undefined && req.body.phone != undefined && req.params.userId != undefined && req.params.contactId != undefined;

            if(validationNotEmpty && validationNotUndefined){

            app.db.models.Contact.findOne({owner:req.params.userId,_id:req.params.contactId},function(err,contactObject){

                if(err){
                    app.api.callback(err);
                }
                else if(!(contactObject && contactObject._id)){
                    console.log('Contact Not Found - Log');
                    app.api.callback("Contact Not Found");
                }else {
                    app.db.models.Contact.find({name:req.body.name,owner:req.params.userId},function(err,uniqueObject){
                        if(err){
                            app.api.callback(err);
                        }
//                        else if(uniqueObject.length > 0){
//                            console.log("Contact Name already exists, Please select different Name - Log");
//                            app.api.callback("Contact Name already exists, Please select different Name");
//                        }
                        else{
                            contactObject.name = req.body.name;
                            contactObject.phone = req.body.phone;
                            contactObject.save();
                            app.api.callback(err,contactObject);
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