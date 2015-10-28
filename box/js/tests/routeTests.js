testMyMug=function(){z()

    $.h1('testing myMug ...').A()
    $.get('/myMug', function(data){z()
        $.h1('in callback..').A()
        $.img(data).A().C('black').drag()
    })

}
testMugByUsername=function(username){z()

    username = username || 'ss'


    $.h1('testing mugByUsername ...').A()

    $.get('/mugByUsername/' + username, function(data){z()


        $.h1('in callback..').A()

        $.img(data).A().C('black').drag()

    })



}
testDefaultMug =function(){z()
    $.img(defaultMug).A()}
testChangeMug=function(){
    //it automatically changes your userMug to the defaultMug


    $.post('/changeMug', {url: defaultMug},

        function(){z()

            TWEEN()
        })

}




////////
///////
// everything above this line works
//////
//////

