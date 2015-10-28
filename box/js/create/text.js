t=cjs.Text.prototype

t.lineH = t.lH  =function(lH){


    if(U(lH)){return this.lineHeight}

    this.lineHeight = lH
    return this


}


t.lineW = t.lW = function(lW){


    if(U(lW)){return this.lineWidth}

    this.lineWidth = lW
    return this}



t.lWH=function(w,h){
    if(U(h)){h=w};
    return this.lW(w).lH(h)
}
t.align=t.textA = t.tA= function(textAlign){


    if(U(textAlign)){return this.textAlign}

    this.textAlign = textAlign
    return this


}
t.baseline = t.textB = t.tB= function(textBaseline){


    if(U(textBaseline)){
        return this.textBaseline
    }

    this.textBaseline = textBaseline
    return this}

t.T = function(text){


    if(U(text)){
        return this.text}

    this.text  = text
    return this}

t.outL = t.oL = function(outline){


    if(U(outline)){
        return this.outline
    }

    this.outline = outline
    return this}

t.F = t.fo = function(font){


    if(U(font)){
        return this.font
    }

    if(N(font)){font = font+'px Arial' }


    this.font = font
    return this}

t.C = t.col = function(color){


    if(U(color)){
        return this.color
    }

    this.color = oO('c', color)

    return this}



cjs.text =  function(text, color, font, x, y){


//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
    x=N(x)? x: 100
    y=N(y)? y: x

    font=font|| '20px Arial'
    font=N(font)? font + 'px Arial' : font

    color=color||'z'

    var textOb =   new createjs.Text(  text,  font,  oO('c',color)  ).XY(x, y)

    return textOb}


cjs.niceText=function(text,x,y){

    var t= cjs.text(text, 'yellow', '40px Arial')

    if(N(x)){t.XY(x,y)}
    return t.drag()
}





BASELINE=function(){z()

    s=cjs.stage(1000).A()



    s.bm('me', function(bm){b=bm
        bm.XY(300).sXY(.2)
        s.dot(300,300)})



    s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
    s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
    s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))


}


LINEH=function(){z()

    s=cjs.stage(1000).A()



    s.bm('me', function(bm){b=bm
        bm.XY(300).sXY(.2)
        s.dot(300,300)})



    s.A(
        t = cjs.text('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
    )


    s.A(
        t2 = cjs.text('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
    )

    s.A(
        t3 = cjs.text('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
    )


}
LINEW=function(){z()

    s=cjs.stage(1000).A()



    s.bm('me', function(bm){b=bm
        bm.XY(300).sXY(.2)
        s.dot(300,300)})



    s.A(t = cjs.text('linewidth 0').XY(300).sXY(4).drag().lineW(0))
    s.A(t2 = cjs.text('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
    s.A(t3 = cjs.text('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))


}


 ALIGN=function(){z()

    s=cjs.stage(1000).A()



    s.bm('me', function(bm){b=bm
        bm.XY(300).sXY(.2)
        s.dot(300,300)})

     s.bm('me', function(bm){b=bm
         bm.XY(500).sXY(.2)
         s.dot(500,500)})

    //textAlign
    s.A(t = cjs.text('linealign left').XY(300).sXY(4).drag()) //default
    s.A(t2 = cjs.text('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
    s.A(t3 = cjs.text('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))

     //textBaseline
     s.A(t = cjs.text('baseline: top').XY(500).sXY(4).drag())
     s.A(t2 = cjs.text('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
     s.A(t3 = cjs.text('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))}



