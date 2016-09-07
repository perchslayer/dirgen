module.exports = function(__, lab, cliEntryFile, exec, path) {

  var proxyquire = require('proxyquire');

  var dirgenCliEntry = __dirname +  '/../bin/dirgen-cli-entry.js';

  var fixtureDir = __dirname +  '/../tests/fixtures';

  lab.test('will not error out with valid template file and output directory', function(done) {

    var dirgen =  proxyquire(dirgenCliEntry, {});

    dirgen
      .generate({
        template: (fixtureDir + '/top-level-repeated-line.txt'),
        output: (__dirname +  '/../tests/' + '/case-outputs/'),
        options: { hideMessages: true }
      })
      .on({
        done: function() {
          console.log('it is finally finished')
          done();
        }
      });

  });

  lab.test('will error out with invalid template file',
  function(done) {
    done();
  });

  lab.test('will error out with invalid output directory',
  function(done) {
    done();
  });

  lab.test('will not error out without any "options" defined ', function(done) {
    done();
  });

  lab.test('will not error out with valid option "force"', function(done) {
    done();
  });

  lab.test('will not error out with valid boolean value for "force"', function(done) {
    done();
  });

  lab.test('will error out with invalid non-boolean value for "force"', function(done) {
    done();
  });

  lab.test('will not error with valid option "silent"',
  function(done) {
    done();
  });

  lab.test('will error out with invalid non-boolean value for "silent"', function(done) {
    done();
  });

  lab.test('will error out with only the options key, no "template" or "output" key',
  function(done) {
    done();
  });

};