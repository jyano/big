var assert = require("assert")
describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
})



// assert = require('assert')
var foo = 'bar' , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
expect(foo).to.be.a('string');expect(foo).to.equal('bar'); expect(foo).to.have.length(3);
expect(beverages).to.have.property('tea').with.length(3);
//assert.fail('hello', 'hello', 'wow', 'equal');   //assert.fail('hello', 'helloo', 'wow', '==');  //assert('hello', 'MESSAGE')

