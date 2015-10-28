$.inputBox=function(ob){  ob = ob||{}

    var func       = ob.func,
        url        = ob.url || '/',
        boxTitle   = ob.boxTitle,
        inputType  = ob.inputType||'text',
        defaults   = ob.defaults||{},
        buttonText = ob.buttonText || 'submit'


    var theDiv = $.div().WH('auto').pad(10)

    if(boxTitle){ theDiv.A(   $.h1(boxTitle)   )  }

    if(inputType == 'text'){

        var theTextInput= $.input().K('form-control')

        theDiv.A( theTextInput )

        theDiv.A(

            $.button(buttonText, function(){
                $.post(
                    url,
                    _.defaults( dataValue(theTextInput), defaults),
                    func
                )
            })

        )}

    if(inputType == 'textArea') {

        var theTextAreaInput = $('<textarea>').K('form-control')

        theDiv.A(

            theTextAreaInput,
            $.button(buttonText, function () {
                $.post(url, _.defaults(dataValue(theTextAreaInput),defaults), func)})
        )}

    if(inputType == 'textAndTextArea') {

        var theTextInput =  $.input().K('form-control'),
            theTextAreaInput = $('<textarea>').K('form-control')

        theDiv.A(theTextInput, theTextAreaInput)

        theDiv.A(

            $.button(buttonText, function () {
                $.post(url,
                    _.defaults(dataValue(theTextInput,theTextAreaInput), defaults),
                    func)

            }))
    }


    //z(); theDiv.a()

    return theDiv}





RANKY=function(tp){z()

    $.format()

    section1.A(

        $.h1('topics!'),

       // ipt('new topic', 'post', '/tpc') ,

        collection = $.inputBox({
            boxTitle:'new topic',
            url:'/tpc',
            buttonText:'post',
            func:function(){},
            inputType:'textArea'
        }),

        $.h4('recent: ')

    )

    $.get('/tpc', function(topics){

        _.each(topics, function(topic){

            section1.A(
                $.button(topic.t,
                    function(){ ranky(topic) }),
                $.br(2))
        })
    })


//ranky takes a topic model from the database
//(which includes all its items already)
//this is messed up

ranky=function(topic){//var collection

    section2.empty()

    section2.A(

        $.h1('topic page: '+ topic.t),

        $.button('live chat', function(){ priv(topic.t) }),
        //ipt('new item', 'post','/itm', {t: t.t}, function(){qG('/tpc1', {t: t.t},function(t){ranky(t)})}, '-'),

        $.inputBox({

            boxTitle:'new item',
            url:'/itm',
            buttonText:'post',
            defaults:{t: topic.t},
            func:function(){
                $.get('/tpc1', {t: topic.t}, function(t){ranky(t)})},
            inputType:'text'

        }),

        collection=$.div())

     itemCollection=new ItemCollection()

    _.each(topic.i, function(i){

             if(O(i)){

                 var itemModel=new ItemModel({  topic:topic.t,  text: i.t,   score: i.s   })

                 itemCollection.add( itemModel )

                // var itemView=new ItemView({model: itemModel}).render().el
                // collection(itemView)
                // itemCollection.render()
             }

    })


     itemsView = new ItemsView({  collection:itemCollection  })

     itemsView.render()



 }


ItemModel=Backbone.Model.extend({initialize:function(){}})
ItemCollection=Backbone.Collection.extend({
    model:ItemModel,
    comparator:'score',

    render:function(){

        collection.E()


        _.each(

            this.models, function(itemModel){

                var itemView=new ItemView({model: itemModel}).render()

                collection(itemView.el)
            }

        )


    }})
ItemsView=Backbone.View.extend({


    initialize:function(){
        var self=this

     this.collection.on('change', function(){

        // alert(3)

         this.sort()
         self.render()
     })

    },



    render:function(){

        collection().E()


        this.collection.each(function(model){

            var itemView=new ItemView({model: model}).render()

            collection(itemView.el)

        })
    }

})
ItemView=Backbone.View.extend({
    initialize:function(){this.listenTo(this.model, 'change', function(){this.render()})},
    render:function(){
        var self=this
        var topic=this.model.get('topic')
        var score=this.model.get('score')
        var text=this.model.get('text')

        qq(this.el).E(

            h1(text),
            h4('score: '+ String(score)),

            bt('up',  function(){

                qP('/vte',  {t:topic, i:text, dr:'u'}, function(){

                    self.model.set('score', self.model.get('score')+1)

                })

            }),

            bt('down',function(){

                qP('/vte', {t: topic ,  i: text,   dr:'d'},


                    function(){

                        self.model.set('score', self.model.get('score')-1)

                    }
                //    function(){ranky(topic)}

                )}))

        return this}})

}







test=function(){

    itemModel=new ItemModel({topic:'yano', text:'hi', score:0})

    z()

    $('body').append(
        new ItemView({model: itemModel}).render().el
    )


}

OBJECT=function(){

       format()

    s1('your objects',br(2),

        t=tx(),
        bt('new object',function(){

            qP('/newObj',
                {t: t.V()})

        }))



    qG('/objs',function(o){

         _e(o,function(o){

             s1(
                 h2(o.t).o(function(){

                     s2.E(h1(o.t), tt=tx(),


                     bt('new sub-object',function(){  qP('/newObj',  {t: tt.V()})

                     }))}))

             _e(o.i,function(i){ s1(h3(i)) })

         })

    })



}

DIRTPAGE=function(){ z()

    MessageModel=Backbone.Model.extend({  })

    MessageCollection=Backbone.Collection.extend({   model:'MessageModel'  })

    MessageView=Backbone.View.extend({  })

    MessagesView=Backbone.View.extend({ })

    $.h1().A(   $.a(  'Dirtpage', '/wap/dirtpage/' )       ).A()

    $.div().A().id('content')


    if(!pam){

        var newMessageBox=$.div().WH('auto').A(
            $.h1('new message'),
            $.input().K('form-control').id('newTopic'),
            $.input().K('form-control').id('newMessage'),
            $.button('ok', function(){

                var newTopic = $('#newTopic').val()

                var newMessage = $('#newMessage').val()

                $.post('/messages',
                    {topic:newTopic,
                        message:newMessage}, function(){})}))



      var searchBox= $.div().WH('auto').A(
          $.h1('search'),
           $.input().K('form-control').id('searchInput'),
          $.button('ok', function(){

                window.location=   '/wap/dirtpage/'+ $('#searchInput').val()


                var searchInput = $('#searchInput').val()

               $.get('/topics/' + searchInput, function(messages){


                    $('#results').html($.h5('length: '+messages.length)  )



                    _.each(messages,

                        function(message){

                            $('#results').A( $.h6( message.message ) )

                        })


                })

            }))


        $div().id('results').A()

        $('#content').A(newMessageBox, searchBox)


        qG('/messages', function(messages){

            _.each(messages, function(message){


              $('#results').A(

                    $h2().A(

                        $.a('topic: '+message.topic,'/wap/dirtpage/'+message.topic)),



                    $.h3( 'message: '+message.message)
                )
            })


        })



    }

    else {


        var newMessageBox= $.div().WH('auto').A(
            $.h1('new message'),
            $.input().K('form-control').id('newMessage'),

            $.button('ok', function(){

                var newMessage = $('#newMessage').val()

              $.post('/messages' ,
                    {topic:pam, message:newMessage},
                    function(){

                       loadResults()

                })

            }))


    $('#content').A(

        $.h1('the '+ pam + ' page'),

        newMessageBox,

        $.div().id('results')
    )


        loadResults=function(){

       $.get('/topics/' + pam, function(messages){

           $('#results').html( $.h5('length: '+messages.length)  )

            _.each(messages,
                function(message){
                    $('#results').A($.h6( message.message ))
                        })})}

        loadResults()

    }}



