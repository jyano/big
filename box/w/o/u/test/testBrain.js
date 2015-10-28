var request = require('superagent');
var expect = require('expect.js');

 l= console.log; d= console.dir;







    describe ( 'suite one' , function() {

        it('knows that 1 be 1', function(done){
        expect(1).to.be(1); done();
        }) ;


        it('can request lh/muggy', function(done){
            request.get('localhost:4000/muggy').end(
                function(res){
                    expect(res).to.exist;
                    done();
                }
            )
        });
    })