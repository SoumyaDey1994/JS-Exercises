module.exports = function log(req, res, next){
    console.log(`Logging User Messages`);
    next();
}