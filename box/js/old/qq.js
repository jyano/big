

qq = function(e,b,c,d){

    if(O(e)){

        if(e.name==='q'){return e}
        //if(e.name==='x'){e=e.c}

        if(E(e)){e=Q(e)}
    }

    else {e = $('<'+oO('t', e||'d')+'>'+(b||'')+'</>')}

    var q=function(a,b){

        //return  _a( q.fn, arguments, q )

        return  q.fn.apply(q, arguments)
    }




    q.fn=function(a,b){
        var g=G(arguments)

        if(N(a)){return q.wh(a*100,(b||a)*100)}
        if(U(a)){return q.O()}
        if(P(a)){return q.s(a).at(b)}
        if(A(a)){q.res=_a(q.m,arguments)
            return q}
        _e(g,function(a){
            if(S(a)){q.H(a)}
            if(O(a)){q.a(a)}})
        return q}



    //the jquery object
    q.q =  q.jq= Q(e)


    // the first element
    q.e =  q.el=  q.q[0]

    //make css

    q.s=  q.css =function(a,b){

        q.res=ss(q.q,a,b)

        return q}




    //call a jquery method
    q.m= q.method=qM(q.q)


    //call a function
    q.o=  q.on= function(){  _a(ee(q), arguments);return q  }



//get/set a property
    q.po=function(a,b){
        q.res= pp(q.q, a,b)
        return q}



    //appending / adding to stage


    q.A = q.a=  q.append=function(a, b){var g=G(arguments), a=g[0], b=g[1]


        var theElement= b,
            args=g


        if(a===2){

            q.q.appendTo(

                Q(  theElement  ||  qq($('body'))  )       )

            if( args.p ){  q.positioning('static')  }

            return q }


        if(g.n){

            if(U(a)){

                qq($('body')).prepend( q.q ); return q

            }

            if( A(a) ){   _.each(a, q.a(a))  }

            else {

                _.each(g,

                    function(a){

                        if(a.ob && iSt(a.ob)){ a=a.Q}

                        q.q.prepend(Q(a))
            })}

        }




        else{

            if(U(a)){

                bd().q.append(q.q);return q}

            if(A(a)){_e(a,q.a(a))}

            else{
                _e(g,function(a){
                if(a.ob && iSt(a.ob)){ a=a.Q}
                q.q.append(Q(a))})}}

        if( g.p ){ qq(a).p('s')  }

        return q}


//prepend to
    q.p2= q.prependTo=function(a){q.q.prependTo($(a||'body'));return q}

   // prepending
    q.pp= q.prepend=function(a){
        if(U(a)){return q.p2()}
        q.q.prepend(Q(a))
        return q}

    //q.d=function(){return q.pp()()}


    //opacity
    q.op= q.opacity=function(a){
        if(U(a)){return q.s('a').r}
        if(N(a)){q.s('a',a)}
        return q}


    //set id
    q.id=function(a){return q.at({id:a})}

    //unbind
    q.ub=  q.unbind=function(f){q.q.unbind();return q}

    //hide
    q.hd= q.hide=function(){q.q.hide();return q}


    //show
    q.sh= q.show=function(){q.q.show();return q}

    //toggle
    q.tg= q.toggle=function(){q.q.toggle();return q}



    //empty and add new items
    q.E=q.empty=function(){var g=G(arguments)
        q.q.empty();
        _e(g,function(g){q(g)})
        return q}




    //turns events off
    q.off=q.F=function(){q.q.off();return q}


    //remove me
    q.X= q.rm= q.remove=function(){q.q.remove();return q}


    //remove me and my parent
    q.XX=function(){q.pa().X();return q} //XX=function(q){q.X()}//remove me


    //del button
    q.xb= q.delBt=function(){//x button!!!

        q.pp(
            $div()(
                $button.k( 'dropdown-toggle' ).at({ 'data-target' : 'dropdown' })(

                    'x', function(){ q.X() })

                    .k('pull-right').margin(20)
            ))

        return q}





    //outer html
    q.O=function(){ _o(q); return q}

    //class
    q.K = q.k=q.class=function(a){ kl(q)(a); return q}




    //color
    q.c= q.backgroundColor=function c(a,b){
        var g=G(arguments),
        s=q.s,
        i=is(a)

        //if(g.n){c='X'}

        if(i(0)){return s('c', b||'z')}
        if(i('*')){return q.c($r())}
        if(i('**')){return q.s('c', $r() )}
        if(i('***')){return q.c($r(), $r() )}

        if(U(b)){q.s('C', $r('c',a));return q}
        q.s({C:a,c:b})
        return q}

    q.w=function(w,b){
        if(U(w)){return q.q.width()}
        if(w==='+'){return q.w(q.w()+b)}
        if(w==='*'){return q.w(q.w()*b)}
        if(w==='%'){return q.w(q.w()*b *.01)}
        q.q.width(w)
        //q.q.width((w<10)?w*100:w)
        return q}


    q.h=function(h,b){
        if(U(h)){return q.q.height()}
        if(h==='+'){return q.h( q.h()+b ) }
        if(h==='*'){return q.h( q.h()*b) }
        if(h==='%'){return q.h( q.h()*b *.01 ) }
        q.q.height(h)
        //q.q.height(  (h<10)?h*100:h)
        return q}

    q.wh=function(a,b){return q.w(a).h(b)}

    q.full=function(){q.wh(W(),H())}//make something full height

    q.Z=function(w,h){w=w||5;return q.wh(w*100,(h||w)*100)}

    q.siz=function(z,b){
        if(U(z)){return q.ch().size()}
        if(z==='-'){return {w:q.q.width(), h:q.q.height()  }}
        if(z==='+'){q.w(q.w()+b); q.h(q.h()+b)}
        if(z==='*'){q.w(q.w()*b); q.h(q.h()*b)}
        if(z==='%'){q.w(q.w()*b*.01); q.h(q.h()*b*.01)}
        q.h(b||z)
        q.w(z)
        return q}

    q.auto=function(){return q.w('auto').h('auto')}

    q.top=q.t=function(a){
        if(U(a)){return q.q.position().top}  //_i(q.pt())
        q.s('t',a)
        return q}





    //offset is distance from the document origin.
    //can set or get.  if pos is static, it gets changed to rel
    //use to get or set offset
    q.os=function(l,t){
        if(U(l)){var o=q.q.offset()
            return {t:o.top, l:o.left}}

        if(O(l)){
            q.q.offset({
                left:l|| q.os().l,
                top:t|| q.os().t})
        return q}

        t=N(t)?t:l
        q.q.offset({left:l,top:t})
        return q}




    //offset left//q.ox=function(l){if(U(l)){return q.os().l}; return q.os(l, q.oy())}
    q.x=q.osl=function(x){
        if(U(x)){return q.q.offset().left}
        return _i(x-q.x())
    }//used in drg


    //offset top//q.oy=function(t){if(U(t)){return q.os().t};return  q.os(q.ox(),t)}
    q.y=q.ost=function(y){
        if(U(y)){return q.os().t}
        return _i(y-q.y())
    }//used in drg

    //get position
    q.ps=  q.position=function(){return q.q.position()}



    //left
    q.left= q.l= q.px= q.positionLeft=q.psl= function(pos){

        if(U(pos)){

            return q.q.position().left}  //_i(q.pl())

        q.s('left', pos);

        return q}




    //top
    q.pst=q.positionTop=function(){return q.ps().top}







    //left and top
    q.lt=  q.leftTop=function(a,b){b=b||a
        q.l(a).t(b)
        return q}


    //right
    q.r= q.right=function(a){
        if(U(a)){return _i(q.q.right())}
        q.s('r',a);
        return q}


    //bottom
    q.bo=  q.bottom=function(a){
        if(U(a)){
        return _i(q.q.bottom())}
        q.s('b',a);
        return q}


    //positioning
    q.p  =q.positioning=function(a, l, t){

        if(U(a)){return ss(q,'p')}

        q.s('p', a)

        if(l){q.l(l)}

        if(t){q.t(t)}

        return q}


        //z index
    q.z=function(a){var g=G(arguments),
        n=N(a)?a:g.p?100:g.n?-100:S(a)?eval('q.z()'+a):false
        return N(n)?q.s('z',n):q.s('z').res}//z-index


    q.dp= q.dy =q.display=function( a, l, t ){
        if(U(a)){ return ss(q,'y')}
        q.s('y',a);
        return q
    }//display


    q.pa =q.parent=function(){
        return qq(q.q.parent())}





    q.ch  =q.children=function rc(a){

        if( N(a) ){return qq( rc()[ a ] )}
        
        return q.q.children(a)

    }





    q._c  =q.children2=function(){return _c(q.q)}//children





    q.ser  =q.serialize=function(){var g=G(arguments)
        if(g.N){return q.q.serializeArray()}
        return q.q.serialize()}



    qit=function(a,b){
        a=a||'result'
        var q=qi(a)
        if(q.q){
            if(U(b)){return q.T()}
            if(S(b)){q.T(b)}
            if(O(b)){q.T(b.ser('-'))}
            return q}
    }




    //shortcut for click
    //gets passed qt and then e (e.x, e.y =offset x,y)
    q.$=function(f){
        if(f){return q.o('$',f)}
        q.q.click();
        return q}


    //shortcut for $doubleclick
    q.$$=function(f){if(f){return q.o('$$',f)}
        q.q.dblclick();
        return q}


    //shortcut for _bind
    q.bind=function(a){return _.bind(q.c[a],q.c)}


    q.ngModel=function(m){q.at('ng-model',m)
        return q}
    q.ngCont=function(m){
        q.at('ng-controller',m)
        return q}
    q.ngSwitch=function(m){q.at('ng-switch',m)
        return q}
    q.ngClick=function(m){q.at('ng-click',m)
        return q}
    q.ngRepeat=function(m){q.at('ng-repeat',m)
        return q}
    q.ngShow=function(m){q.at('ng-show',m)
        return q}
    q.ngIf=function(m){q.at('ng-if',m)
        return q}
    q.ngSubmit=function(m){q.at('ng-submit',m)
        return q}
    q.jLoad=function(a){
        qJ(a, function(d){q(d)})
        return q

    }



    q.ih=q.innerHTML=function(){return q.q[0].innerHTML}

    q.oh=q.outerHTML=function(){return q.q[0].outerHTML}

    q.H=q.outerHTML2= function(t){
        if(t==='e'){q.res=q.q[0];return q}
        if(t==='o'){q.res=q.outerHTML;return q}

        if(U(t)){return q.q.html()}

        q.q.html(t)
        return q}


    q.T=q.text=function(t){
        if(U(t)){return q.q.text()}
        q.q.text(t)
        return q}//text


    q.fe   =q.forEach=function(a){return q.b('fe',a)}

    q.feD  =q.forEachData=function(a){return q.fe('$data.'+a)}

    q.b=  q.knockoutBind=function(a,b){

        var o=[]

        if(O(a)){

            _.each(a, function(v,k){

                o.push(oO('b', k) + ':'+ v )

            })

            q.attr({'data-bind': o.join()})

        }


        else {

            q.attr({

                b: oO('b', a)+':'+b

            })}


        return q}



    q.bd=q.knockoutBind2=function(a){var g=G(arguments),a=g[0]
        if(g.p){a='text: '+a}
        if(g.n){a='click: '+a}
        if(g.m){a='value: '+a}
        if(g.d){a='checked: '+a}
        q.at({b:a})
        return q}





   //content editable!!! cool
    q.cE=function(a){

       return q.at('contenteditable', a?'true':'false')

    }




    q.pt=function(a){if(U(a)){return ss(q,'gt')};q.s('gt',a);return q}
    q.pb=function(a){if(U(a)){return ss(q,'gb')};q.s('gb',a);return q}
    q.pl=function(a){if(U(a)){return ss(q,'gl')};q.s('gl',a);return q}
    q.pr=function(a){if(U(a)){return ss(q,'gr')};q.s('gr',a);return q}

    q.mt=function(a){if(U(a)){return ss(q,'mt')};return q.s('mt',a)}

    q.mb=function(a){if(U(a)){return ss(q,'mb')};return q.s('mb',a)}

    q.ml=function(a){if(U(a)){return ss(q,'ml')};return q.s('ml',a)}
    q.mr=function(a){if(U(a)){return ss(q,'mr')};return q.s('mr',a)}


    q.bt=function(a){if(U(a)){return ss(q,'bt')};q.s('bt',a);return q}
    q.bb=function(a){if(U(a)){return ss(q,'bb')};q.s('bb',a);return q}
    q.bl=function(a){if(U(a)){return ss(q,'bl')};q.s('bl',a);return q}
    q.br=function(a){if(U(a)){return ss(q,'br')};q.s('br',a);return q}

    q.M=q.margin=function(a){return q.mt(a).mb(a).ml(a).mr(a)}

    q.mg= q.margin2=function(a){if(U(a)){return ss(q,'g')};q.s('g',a);return q}

    q.P=q.padding=function(a){return q.pt(a).pb(a).pl(a).pr(a)}

    q.B=  q.border=function(a){
        return q.bt(a).bb(a).bl(a).br(a)}

    q.bd=  q.border2=function(a,b,c){
        if(N(a)&&U(b)){
            return q.s({dw:a})}
        return q.s('d',OL(a,b,c))}





    q.ol= q.outline=function(a){return q.s('o',OL(a||'m'))}
    q.bw= q.borderWidth=function(a){return q.s({dw:a})}

    q.bs= q.borderStyle=function(a){
        return q.s({ ds : a })
    }




    q.bc= q.borderColor=function(a){return q.s({dc:a})}

    q.f=q.font=function(a){
        if(N(a)){return q.s('fz',a)}
        return q.s('f',FO(a))
    }//font




    q.overflowAuto=function(){}

    q.cen=function(){return q.K('text-center')}

    q.ty=q.type=function(t){return q.at({
        type:oO('i',t)})}//type

    q.nm= q.name = function(name){ return q.at({name: name}) }





    q.hr= q.href=function(a){
        return q.at({href:a})
    }




    q.at= q.attribute=function(a,b){
        q.res = aa(q.e,a,b)   // get/set attr//for,name,id,val, etc...
        return q}



    q.v= q.V= q.value=function(a){var g=G(arguments),a=g[0],v=q.q.val()
        if(U(a)){if(g.N){q.q.val('')};return v}
        q.q.val(a)
        return q}//q.vx=

    q.m= q.modalToggle=function(a){q.q.modal(a||'toggle');return q}


    q.mpfd= q.multipartFormData=function(){return q.at({enctype: 'multipart/form-data'})}


    q.act= q.action=function(a){return q.at({a: a||'/upl'})}

    q.dd=  q.dropDown= function(a){
        return q.k('dropdown-toggle').at({'data-target':'dropdown'})
    }




    q.src=function(){return q.src}

    q.fO= q.fadeOut=function(n,f){q.q.fadeOut(n,f);return q}
    q.fI= q.fadeIn=function(n,f){q.q.fadeIn(n,f);return q}
    //fO=function(a){Q(a).fadeOut(b,c)}
    //fI=function(a){Q(a).fadeIn(b,c)}

    q.OI= q.fadeOutIn=function(n1,n2){q.q.fadeOut(n1).fadeIn(n2||n1);return q}
    q.sU= q.slideUp=function(n,f){q.q.slideUp(n,f);return q}
    q.sD= q.slideDown=function(n,f){q.q.slideDown(n,f);return q}

    q.h1=function(a){q.j({h:'100%'})}
    q.w1=function(a){q.j({w:'100%'})}
    q.wh1=function(a){q.j({h:'100%',w:'100%'})}

    q.animate=q.j=function(b,c){

        if( N(b) ){
            q.q.delay(b)
            return q
        }

        b = qs(b)

        if( D(c) ){q.q.animate(b,c)}

        else { q.q.animate(b) }

        return q}









    q.jj=function(a,b){var i=is(a),
            m=i('t')?'toggle'
                :i('s')?'hide'
                :i('h')?'show'
                :i('sd')?'slideDown'
                :i('su')?'slideUp'
                :i('fo')?'fadeOut'
                :i('fi')?'fadeIn'
                :0

        if(m){q.q[m](b);return q}}

    q.ph  =q.placeholder=function(a){return q.at({ph:a})}//set placeholder


    //q.anims=[q.slU,q.slD,q.slT,q.fI,q.fO,q.fT]
    //q.anim=function(b,c){return N(c)? q.q.animate(qs(b),c*1000): q.q.animate(qs(b)) }
    /////////


    q.drg=function(){
        drg(q);return q}


    q.backgroundImage=q.bgi=function(a){////////
        q.s('bi',_s(a,'+'));return q}

    q.da= q.data= function(a,b){q.at('data-'+a,b)}

    //q.sp=function(a,b,c){return q.a(sp(a,b,c))}
    //q.dv=function(a,b,c,d){return q.a(dv(a,b,c,d))}

    q.ct=q.contents=function(a,b){return q.q.contents(b)}

    //append to an element 1 or more image els

    q.i= q.image=function(){var g=G(arguments)
        _e(g,function(i){q(im(i))})
        return q}


    q.setBackgroundImage=q.bi=function(a){//set background image
        var u=function(a){
            return 'url("'+ src(a) +'")'}
        q.s({bi:u(a)})
        return q}

    q.bp=q.positionBackgroundImage=function(x,y){
        var g=G(arguments),x=g[0],y=g[1]
        x=N(x)?x:0
        y=N(y)?y:0
        q.s({bp:x+'px '+y+'px'})
        return q}

    q.fr=q.setFrame= function(n,w){
        if(O(n)){q.bp(n.n,n.w)}
        else{q.bp(n*w)}
        return q}

    q.anf= q.animateFrames=function(n,w){
        var c=0
        n=n||10
        w=w||20
        I(function(){q.fr(c,w)
            c= (c+1) % n},1000)}



    if(O(b)){q.s(b)}
    if(O(c)){q.at(c)}

    if(S(d)){q.H(d)}

    if(F(d)){q.$(d)}

    return q}


qM=function(a){return $m('q',$(a))}

clo=function(a){return qq(qq(a).q.clone())}

eq=function(a,b){return $(a).eq(b)}


cI=clearInterval
qi=function(a,b){
    var q=qq($('#'+a))
    if(S(b)){eval('q.'+b)}
    if(O(b)){q(b)}
    return q}
clk=function(a){return qi(a).$()}
qk=function(a,b){
    var q=qq($('.'+a)[0])
    if(S(b)){eval("q."+b)}
    if(O(b)){q(b)}
    return q}
qe=function(a,f){_e(
    $('.'+a),
    function(q){f(qq(q))})}



