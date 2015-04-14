module.exports = test;

function test(fs) {
    var should = require('should');
    var when = require('when');
    before(function(done) {
        done();
    });

    after(function(done) {
        fs.delete('tmp', done);
    });

    describe('glob', function() {
        before(function(done) {
            fs.mkdir('tmp/glob/test')
            .then(function() {
                return when.all([
                    fs.writeFile('tmp/glob/a.js', 'a.js'),
                    fs.writeFile('tmp/glob/b.js', 'b.js'),
                    fs.writeFile('tmp/glob/c.js', 'c.js'),
                    fs.writeFile('tmp/glob/d.css', 'd.css'),
                    fs.writeFile('tmp/glob/test/e.js', 'e.js'),
                    fs.writeFile('tmp/glob/test/f.png', 'f.png'),
                ]);
            })
            .done(function() {
                done();
            }, done);
        });

        it('should glob **/* ok', function(done) {
            fs.glob('tmp/glob/**/*.js', function(err, files) {
                should(err).not.be.ok;
                should(files).eql(['tmp/glob/a.js', 'tmp/glob/b.js', 
                    'tmp/glob/c.js', 'tmp/glob/test/e.js']);
                done();
            });
        });

        it('should glob * ok', function(done) {
            fs.glob('tmp/glob/test/*.js', function(err, files) {
                should(err).not.be.ok;
                should(files).eql(['tmp/glob/test/e.js']);
                done();
            });
        });
    });
}