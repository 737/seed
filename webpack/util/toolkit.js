
module.exports = {

    isArray: function (arg) {
        // first way:
        return Object.prototype.toString.call(arg) === '[object Array]';

        // second way:
        //return (arr instanceof Array);
    }
};