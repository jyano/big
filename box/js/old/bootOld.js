

////


ModalDialog =MDIALOG=function(){
    var theDiv=$div().k('modal-dialog')
    _.each(G(arguments),function(arg){theDiv(arg)});
    return theDiv}
ModalForm =MFADE = function(){
    var theDiv=$div().k('modal form')
    _.each(G(arguments),function(arg){theDiv(arg)});
    return theDiv}
Modal = MODAL=function(a,b,contents){

    var footer=ModalFooter(

        bt({t: 'close' }).at({  type:'submit',  'data-dismiss':'modal'  }) )

    if(contents){ footer(contents) }

    return ModalForm(//Fade?

        ModalDialog(

            ModalContent(

                ModalHeader(

                    bt({t: ex}).k('close')

                        .at({'data-dismiss':'modal'}),

                    h4(a).k('modal-title')
                ),

                ModalBody(b), footer))
    )}





//elip =function(a){return a+'&hellip;'}
//ex = function(){return '&times;'}

ModalContent =MCT=function(){
    var theDiv=$div().k('modal-content')

    _.each(
        G(arguments),
        function(arg){theDiv(arg)})

    return theDiv}




ModalFooter = MFOOT=function(){

    var theDiv=$div().k('modal-footer')

    _.each(G(arguments),function(arg){theDiv(arg)})

    return theDiv}




ModalBody = MBODY= function(){

    var theDiv = $div().k('modal-body')

    _.each(G(arguments),
        function(arg){theDiv(arg)})

    return theDiv}


ModalHeader = MHEAD= function(){

    var theDiv = $div().k('modal-header')

    _.each(G(arguments),
        function(arg){theDiv(arg)})

    return theDiv}

HeaderDiv=HD=function(){

    var args=G(arguments),

        theDiv=$div().k('header')

    _.each(args,function(v){
        if(S(v)){v=h3(v)}
        theDiv(v)})

    if(args.p){  theDiv.cen()  }

    return theDiv.id('header').mb(20)

}
