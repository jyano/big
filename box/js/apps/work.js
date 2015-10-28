







BOOK=function(){

    toBook = function(){Y.run('book')}

    $.format()


    s1.A(

        $.h1('BOOK').click(toBook) ,

        bookName = $.input(),

        $.button('new book',function(){
            $.qP('/newBook',
                {name: bookName.V()},
                toBook)}),

        $.hr()

    )


    $.qJ('/books',function(books){

        s1.A($.h3('books:'))

        _.each(books,


        function(book){
            s1.A( $.span().C('x').click(function(){
                    $.qP('/delBook',{book: book._id},toBook)
                }),

                $.button(book.name,function(){


            s2.A($.h2('CHAPTER: '+book.name),
                chapterTitleInput=$.input(),
                $.button('new chapter',
                    function(){$.qP('/newChapter',{

                        chapterTitle: chapterTitleInput.V(),

                        book:book._id
                    },function(){
                        chapterView(book, c)})}), $.hr())


                    $.qJ('/chapters',{book:book._id},



                    function(chapters){


                        _.each(chapters,function(chapter){
                        s2.A($.button(chapter.title,
                            function(){
                                chapterView(book,chapter)}), $.br(2))})})

        }), $.br(2))})})


    chapterView=function(b,c){ s2.E();s1.E();

        s1.A($.h1('BOOK').click( toBook) )

        $.qJ('/chapters',{book:book._id},

            function(chapters){
                s1.A($.h3('chapters:'))

                s2.A($.h3('pages:'))

                _.each(chapters,function(chapter){



                    s1.A($.span()('x').click(function(){

                            $.qP('/delChapter',{chapter: chapter._id},
                            function(){chapterView(book, chapter)})
                    }),
                        $.button(chapter.title, function(){chapterView(book,chapter)}), $.br(2))})})


        s2.A($.h1('chapter: '+chapter.title))

        s2.A( pageNameInput=$.input(),
            $.button('new page',
                function(){

                    $.qP('/newPage',{

                        pageName :pageNameInput.V(), chapter:chapter._id


                    })}), $.hr())



        $.qJ('/pages', {chapter: chapter._id},

            function(pages){p=pages

                _.each(pages,function(page){

                    s2.A($.button(page.name,

                    function(){
                        pageView(book,chapter,page)}), $.br(2)  )})})
}}


pageView = function(book, chapter, page){s1.E();s2.E()

    s1.A($.h1('BOOK').click(ldr('book')) )

    s1.A($.h1('CHAPTER '+ chapter.title).click(
        function(){chapterView(book,chapter )}

    ))

    $.qJ('/pages',{chapter: chapter._id},

        function(pages){
            s1.A($.h3('pages'))

            _.each(pages,function(page){

                s1.A(
                    $.button(page.name,function(){
                sectionView(chapter)}), $.br(2)
            )})})



    s2.A($.h1('page: '+page.name))


    $.qJ('/sections', {
            book: book._id,
            chapter: chapter._id,
            page: page._id},

        function(sections){
            _.each(sections,
                function(section){

                    s2.A(
                        $.button(section.section, function(){sectionView(book,chapter,page)}),
                        $.br(2)
                    )})})
}






createjs.element = function(a){return new createjs.DOMElement(a)}

ELEMENTS=function(){z()

    div = $.div('red', 400, 400).P('a').A().A( $.input() )

    s = stage = createjs.stage('yellow', 1000).tick().A()

    elem  = new createjs.DOMElement( div[0] )

    //stage.A(el)



   // tw(el, [{x:300,y:300},2000])

   // tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])

}





