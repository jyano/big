
NavHeader=function(){

    _IconBars=function(num){

        var span = $.span()

        _.times(num||1, function(){

            span.A( $.span().K('icon-bar') ) })

        return span}


    var theButton = $.button().K('navbar-toggle').attr({'data-target':'#navbar','data-toggle':'collapse'}).A(
        '',


        _IconBars(4))



    var theBrand = $.a('wappy', function(){$w.location='/wap'}).K('navbar-brand')

    return $.div().K('navbar-header').A(theButton, theBrand) }


Nav=function(){
    return $ul().k("nav navbar-nav").apply(0, G(arguments))}


Dropdown=function(){

    DropdownToggle0 =   function(dropdownName, glyphicon){

        return    $.a().K('dropdown-toggle').attr({'data-toggle':'dropdown'}).A(
            $.glyphicon(glyphicon),
            $.b('&nbsp;'+ dropdownName),
            $.span().K("caret")
        )}




    var args=G(arguments),  theInnerUl= $.ul().K('dropdown-menu'), theOuterLi




    _.each(args.r,
        function(arg){

            if(  S(arg)){

                arg=args.p?

                    LiALoader.A(arg)   // $liA(arg, function(){load(arg)}   )

                    : $.liA(arg) } // *****

            theInnerUl.A( arg ) })



    theOuterLi = $li().k('dropdown')(

        $a().k('dropdown-toggle').at({'data-toggle':'dropdown'})(
            args.f,
            $.span().K('caret')
        )

    )



    return theOuterLi.A( theInnerUl )


}



DropdownLoader=function(){

    LiALoader = function(a){return $.liA(a,   function(){ load(a) }   )   }











    var args=G(arguments),  theInnerUl, theOuterLi


    theInnerUl = $.ul().K('dropdown-menu')


    _.each(args.r,   function(arg){
        if(  S(arg)){  arg = LiALoader(arg)    }
        theInnerUl.A( arg ) })


    theOuterLi = $li().K('dropdown').A(

        $a().K('dropdown-toggle').at({'data-toggle':'dropdown'})
        (
            args.f,

            $.span().K('caret')

        )

    )



    return theOuterLi( theInnerUl )

}


NavRight=function(){return $ul().k("nav navbar-nav navbar-right").apply(0, G(arguments))}




// just pass in the contents of the collapsable part
StandardNavbar=function(){


    var navbar =  $div().k('navbar navbar-default navbar-inverse navbar-fixed-top')

    //NavCollapse = function(a){return $div().k('collapse navbar-collapse').id('navbar').apply(0, a)}

    var div= $div().k('collapse navbar-collapse').id('navbar')

    div.apply(0,  G(arguments) )


    navbar.A(

        NavHeader(),

        div


    )

    navbar.pp()

    return navbar}
