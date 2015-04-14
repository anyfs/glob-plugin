module.exports = Plugin;

var glob = require('./glob');
function Plugin() {}

Plugin.glob = glob;

Plugin.prototype.register = function(fs) {
    fs.glob = function(pattern, options, cb) {
        if (typeof options === 'function') {
            cb = options;
            options = null;
        }

        if (!cb) {
            return this._promise(this.glob, pattern, options);
        }

        glob(this, pattern, options, cb);
    }
};

Plugin.prototype.test = function(fs) {
    var test = require('./test');
    test(fs);
};