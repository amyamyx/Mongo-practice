const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', (done) => {
    const tiffany = new User({ name: "Tiffany" });
    
    tiffany.save()
      .then(() => {
        // Has tiffany been saved successfully?
        assert(!tiffany.isNew); 
        done();
      });
  });
});