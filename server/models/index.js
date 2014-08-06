exports = module.exports = function(app, mongoose) {
    require('./contact')(app, mongoose);
    require('./user')(app, mongoose);
};
