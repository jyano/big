var request = require('superagent');
var expect = require('expect.js');

 l= console.log; d= console.dir;

    function Ash (){ this.array = []  }  ;

    Ash.prototype.push = function(item){this.array.push(item); return item}

    Ash.prototype.s = function(key, value){this.array.push({key:key, value:value}); return this.array}






describe ( 'Ash' , function() {

    it('instantiates', function(done){

        a = new Ash(); //d(a);

        expect(a).to.eql({array:[]});
        done();

    })



    describe('#s', function(done){


        it('sets values', function(done){

            a = new Ash();
            a.s('hi', 5);

            expect(a.array[0].value).to.eql(5);
            done();

        })
    })





    it('can push', function(done){
        a = new Ash();  a.push(5);  a.push(8);


        expect(a.array).to.eql([5,8]); done();
    }) ;


    it('can do something', function(done){
       done();    }
        )


})




