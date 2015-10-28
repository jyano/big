







aaron=new Book({name:'Aaron' })

aaron.save(function(){chapter1=new Chapter({
    chapterTitle:"Once upon",
    book:aaron._id

})


    chapter1.save()})
    Chapter.findOne({ chapterTitle: 'Once upon' }).populate('book').exec(function(z,s){$l('The creator is %s', s.book.name);})
    Chapter.findOne({ chapterTitle: /timex/i }).populate('book', 'name')  .exec(function(z,s){
            $l('The creator is %s', s.book.name)
            $l('The creators age is %s', s.book.age)})


Chapter.find().populate('fans book').exec()
    
Chapter.find().populate('fans').populate('book').exec()
    
Chapter.find().populate({path: 'fans',match: { age: { $gte: 21 }},

    
    
    
        
        select: 'name -_id',options: { limit: 5 }}).exec()
aaron.chapters.push(chapter1);
aaron.save(callback)
Book.findOne({name: 'Aaron'}).populate('chapters')  .exec(function(z,p){$l(p)})

Chapter.find({
    book: aaron._id
},function (z,s) {$l('The chapters are an array: ', s )})


guille = new Book({name:'Guillermo'})
guille.save(function(z){s.book = guille;
    $l(s.book.name)
 chapter.save(function(z){Chapter.findOne({chapterTitle: /timex/i }).populate({path: 'book', select: 'name' }).exec(function (z, s) {

     $l('The creator is %s', s.book.name)})})})





