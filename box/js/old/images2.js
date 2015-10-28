
//Graphics.superImage = function(img){ img = $(img || new Image())}


sIDEPRECATED=function(i){
    i = i || new Image()
    i.source =  i.s=function(a){
        i.l=a;
        if(U(a)){return i.src}
        i.src = _s(a);
        return i}

    i.ready = i.r=function(a){


        $(i).load( function(i){

            a(  sI(i.target)  )

        })}
    i.wid=    i.w=function(n){

        var g=G(arguments)

        if( U(n) ){ return i.width}

        i.i()

        i.q.w(n)

        return i

    }
    i.h= i.h=function(n){
        if(U(n)){return i.height}
        i.i();
        i.q.h(n);
        return i}
    i.i=function(){

        i.q.w( i.q.w() )
        i.q.h( i.q.h() )

        return i}
    i.q = qq(i)
    return i}



$imgDEPRECATED = im = function(a,b){

    var g=G(arguments),

        i=sI()

    if( O(E(a)) && E(a).complete ){

        a = sI( E(a) )

        if( b ){ b(a) }

        return a  }






    //this is for when returning the mug
    //it is a dataUrl, but for some reason,
    //i must run parseJSON on it
    // if( (a).indexOf('data') ){a= $.parseJSON(a)}


    if(b){i.r(b)}

    i.s(a||(g.N?'me':''))

    if(g.p){$b(i)}

    return i}

// im.i=function(){i=im('+')}
// im.ig=function(s){return qq('I',{},{s:_s(s||'me')}).a().drg()}

//dep
ime=imageSized=function(a, w, h){
    w=w||50; h=h||w
    return im(a||'me').w(w).h(h)}



// OH RALLY??
gfi=getFirstImage=function(){return qq($('img')[0])}





//////////////////////////////
//////////////////////////////
///////////////////////////////////

pim=popImage=function(a){

    a=a||'me'

    pop(

        im(a),{t:h3(a)}

    )}


dim=draggableImage=function(){

    var g = G(arguments)

    g[0] = g[0] || 'me';  return _a( qim, g ).drg()

}


//not worth it
//pics=function(f){qG('/myPix',f)}



// not worth it
//imgs=function(f){  qJ('/img', f) }



//dep??
qim=function(img,z,func){

// puts im on screen, chose Z and onClick

    var image = qq( im( img ) )

    if( _.isNumber( z ) ){ image.Z( z ) }

    if( func ){ image.$( func ) }

    return image.a()

}

// has use.. good experimentally specific component/widget
$.qim = function( img, z, func ){

// puts im on screen, chose Z and onClick

    var image = $.img( img )

    if( N( z ) ){ image.W(z).H(z) }

    if( func ){ image.$( func ) }

    return image.A()

}


// oh, rally??

del =function(item, url){

    return $button('X',

        function(q){

            $.post(url, {_id: item._id})


            //if(q){
            q.XX()
            //}
        })

}


adr=function(p){  return p._id+p.e  }

ci=function(i){return _c().id(i)}

xi = function(i){ return xx(  _c().id(i)   )  }
