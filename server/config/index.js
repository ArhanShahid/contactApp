exports = module.exports = function(app) {

    // Use for development
    //app.set("mongodb-url",'localhost/contact');

    // Use for production
    app.set("mongodb-url","mongodb://arhanme:mearhan@ds035750.mongolab.com:35750/contactapp");

}