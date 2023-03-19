const assert = require('assert');
const fs = require('fs');

let path, str;

describe('appendFileSync', () => {
    beforeEach(() => {
        path = './message.txt';
        fs.unlinkSync(path);
    });

    it('laver en ny fil med en tekststreng', () => {
        // Setup
        
        str = 'Hello Node.js';

        // Exercise: write to file
        fs.appendFileSync(path, str, {encoding: 'utf8'});

        // Verify: compare file contents to string
        const contents = fs.readFileSync(path, {encoding: 'utf8'});
        assert.equal(str,contents);
    })    

    it('laver en ny fil med en tekststreng', () => {
        // Setup
        path = './message.txt';
        str = 'hi';

        // Exercise: write to file
        fs.appendFileSync(path, str, {encoding: 'utf8'});
        
        // Verify: compare file contents to string
        const contents = fs.readFileSync(path, {encoding: 'utf8'});
        assert.equal(str,contents);
    })    

})