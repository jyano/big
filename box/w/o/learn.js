fs = require('fs')

P = require('path')

p=process.argv[2]

e=process.argv[3]



fs.readdir(p,

    function(err, d){




    d=d.filter(


        function(d){
//            console.log(P.extname(d))
            return P.extname(d)=='.'+e

        })


        d.forEach(function(d){

            console.log(d)
        })






})




