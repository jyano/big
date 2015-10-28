$l('mong!')
require('mongodb').MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db){ if(err){throw err}

         $l('connect!!!!!!!!')

         var obsCollection =  db.collection('obs')

         obsCollection.find().toArray( function(err, data){

             $l(data)

             db.close()
         })


     })
dbInsert=function(){

    var obsCollection =  db.collection('obs')

    obsCollection.insert(
        {name:'rigo', game:'shmigo'},
        {name:'jason',game:'shmason', kids: [{s: 0}, {s: 1}] },

        function(err, data){

            obsCollection.count(function(err, count){$l('count: '+count)})
            obsCollection.find({name:'jason'}).toArray(function(err, data){

                   $l(data);
                   db.close()
               })
           })
}
dbRemove=function(){

    var c= db.collection('obs')

    c.remove({},function(err, data){

        c.count(function(err, count){
            $l('count: '+ count)})

        c.find({name:'jason'}).toArray(
                function(err, data){
                    $l(data);db.close()})})

}
dbUpdate=function(){

    var coll =  db.collection('obs')


    coll.update({name:'jason'},  {$set: {a:{n:'ya',g:'na'}}},
        function(err,data){

            coll.count(function(err, count){
                $l('count: '+ count)
            })

            coll.find({name:'jason'  }).toArray(function(err, data){
                $l(data); db.close()

            })})


}