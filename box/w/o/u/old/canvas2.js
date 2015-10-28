l('canvas');


rad = function (deg) {var rads = deg * (Math.PI / 180);   return rads}
TenArr = function(){return [1,2,3,4,5,6,7,8,9,10]}

getCtx =  function(id){return $('#' + id).get(0).getContext('2d')}

wh=function(i){i.w = i.width; i.h=i.height; return i}
miniCtx = function(C){
    C.T = C.translate;
    C.R = C.rotate;
    C.S = C.scale;
    C.D = C.drawImage;
    C.cid = C.createImageData;
    C.gid = C.getImageData;
    C.pid = C.putImageData;
    C.w = C.canvas.width;C.h = C.canvas.height;

    C.l = $(C.canvas).offset().left;
    C.t = $(C.canvas).offset().top;
    C.mx = function(x){return parseInt(x - this.l)}
    C.my = function(y){return parseInt(y - this.t + pageYOffset) }
    return C}


getCtxMini = function(name,id){w[name]=miniCtx(getCtx(id)); }


CTX = function(id){
           window[id] = miniCtx(getCtx(id));


}


  //  #{id}.w = #{id}.canvas.width ; #{id}.h = #{id}.canvas.height









setStyles = function (C, fillStyle, strokeStyle, lineWidth) {C.strokeStyle = strokeStyle;C.fillStyle = fillStyle;C.lineWidth = lineWidth;}
circ = function(ctx,x,y,radius){ctx.beginPath(); ctx.arc(x, y, radius, 0, 2 * Math.PI, false); ctx.fill(); ctx.stroke();}
drawPoint = function(x,y){}

replacePic   = function (a, b)  { a.parentNode.replaceChild(a,  b )}
replaceFirstWithSecond = function (){  a = document.getElementsByTagName('img')[0];  b = document.getElementsByTagName('img')[1];
    switchPics(a,b)}  //document.location.href
im = function(){return new Image()}  //imgSrc = function(img, src){img.src = src}   //setSRC = function(src,img){ if (src) { if (img){SRC(img,src)} else {SRC()}   }}
imLoaded = function (img, fn) {img.addEventListener('load', fn); return img }
setPNGSource =  function (img, png) {img.src = '/' + png + '.png'; return img}
pngLoaded = function(png, fxn){return setPNGSource(imLoaded(im(),fxn),  png)}
plopPng = function(name, png){w[name]=pngLoaded(png); }
PNG = function(img){plopPng(img,img)}

// empty canvas

CLR = clearCanvas = function(ctx){ctx.clearRect(0, 0, ctx.w, ctx.h)}



reset = resetCanvas = function(c){c.canvas.width = c.canvas.width}



// draw img on canvas
simpleDraw = function(ctx, img){ctx.drawImage(img, 0, 0)};
draw300 = function(ctx, pic){ctx.drawImage(pic, 0,0,300,300,0,0,300,300  )}
imgInCv = function(src, ctx){var img=im(); var ctx=getCtx(ctx);$(img).load(function(){ctx.canvas.height = img.height;  ctx.canvas.width = img.width; ctx.drawImage(img, 0, 0)}); img.src = src}


imgOnCv = function(img, ctx){ctx.drawImage(img, sx,sy,sw,sh,dx,dy,dw,dh)} // Draw 1
imgDraw = function(img, ctx){return function(sx,sy,sw,sh,dx,dy,dw,dh){ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh)}}
sImgDraw = function (src, ctx){src.apply(imgDraw, ctx)} // ?
imgCan = function(ctx,src){img=im();$(img).load(function(){ctx.drawImage(img, 0, 0, ctx.w, ctx.h)});img.src = src;return img}

pathToSrc= function(path){return "http://localhost:4000/" + path}


DataFactory =  function(i, c){
    var d = {}; i.w = i.width;  i.h = i.h;
    d.tw = function (i,c,p){return       [0, 0, i.w, i.h, 0,0,200,200]}
    d.actual = function (i,c,p){return   [0, 0, i.w, i.h, 0,0,i.w,i.h]}
    d.most = function (i,c,p){return     [0, 0, i.w, i.h, 0,0,i.w *.8,i.h *.8]}
    d.half = function (i,c,p){return     [0, 0, i.w/2, i.h/2, 0,0,i.w/2,i.h/2]}
    d.big = function (i,c,p){return      [0, 0, i.w, i.h, 0,0,i.w*2, i.h*2]}
    d.fit = function (i,c,p){return      [0, 0, i.w, i.h, 0,0, px.c.w, px.c.h]}
    d.bord = function (i,c,p){return     [0, 0, i.w, i.h, 0 + (.5 * p), 0 + (.5 * p), c.c.w - p, c.c.h - p ]}
    return function(style, option){return d[style](i, c, option)}
}

drawIm = function (ctx){var C =  miniCtx(ctx); var i = wh(im()); $(i).load(function(){l('i.ld');  simpleDraw(C, i);
BUTTONS({   flipX:function(){C.T(((i.w + 1)*(-1)),((-i.h + 1)*(-1)));C.R(Math.PI);D();},
            flipY:function(){C.R(Math.PI/32);D();},
            moveUp:function(){C.T(0,-50) ;D()      ;},
            moveDown:function(){C.T(0,50);D();},
            moveLeft:function(){C.T(-50,0);D();},
            moveRight:function(){C.T(50,0);D();},
            rotateC:function(){C.R(rad(10));D();},
            rotateCC:function(){C.R(-(rad(10)));D();},
            smaller:function(){C.S(.9,.9);C.D(i,100,100,i.w,i.h);},
            bigger:function(){C.S(1.3,1.3);C.D(i,0,0,i.w,i.h)}})})}

drawForMe = function(img, ctx, dx,dy){var C = miniCtx(ctx); var i = wh(img); return function(t){switch (t)
{case 'fl': C.D(i,0,0,i.w,i.h,dx,dy,i.w,i.h);break;
 case 'tp': C.D(i,0,0,i.w,i.h/2,dx,dy,i.w,i.h/2);break;
 case 'bt': C.D(i,0,i.h/2,i.w,i.h,dx,dy,i.w,i.h/2);break;
 case 'lf': C.D(i,0,0,i.w/2,i.h,dx,dy,i.w/2,i.h);break;
 case 'rt': C.D(i,i.w/2,0,i.w/2,i.h,dx,dy,i.w/2,i.h);break;}}}

DRAW = function (i, c, dx, dy){return function(Sx,Sy,Sw,Sh,Dw,Dh){c.drawImage(i,Sx,Sy,Sw,Sh,dx,dy,Dw,Dh)}    }// draw = DRAW(i, c, dx, dy) //d =  function(){draw(sx,sy,sw,sh,dw,dh)}

draw = function(img, ctx){//source
    return function(sw,sh){var sw = sw; var sh = sh;// sourceArea
        return function(sx, sy){var sx = sx; var sy = sy;//sourceSelection
            return function(dw, dh){var dw = dw; var dh = dh; //stamp
                return function (dx, dy){ //Stamp
                    ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh)}}}}}

stamp = function(img, ctx){return draw(img,ctx)(img.width,img.height)(0,0)(img.width,img.height)}
STA = function(img, ctx, n){   var img = img; var ctx = ctx; var n= n; return function(x,y) { draw(img,ctx)(n*100, n*100)(0,0)(n*100,n*100)(x,y) }}
//s1 = stamp(chicks,c);s2 = stamp(chicks,cc);  // sta = "s1(0,0)"; st = f(sta)

Draw2 = function(img, ctx){
    var sIm = imgDraw(img, ctx);
    var Data = DataFactory(img, ctx);
    return function(style, option) {sImgDraw(sIm, Data(style, option) )}}

LEFT = function(S){  return CUT(S)(0,0)(S.width/2,S.height)  }
drawMy= function (My) {cutter(My)(0,0)(My.w, My.h)}
scaleDraw = function (i,c){ c.save(); c.scale(c.w/i.w, c.h/ i.h ); c.drawImage(i,0,0  ); c.restore();}

changeData = function(d, str){var f = new Function("v","k","l","l[k]=" + str);ea(d.data, function(v,k,l){f(v,k,l);})}
changeData2 = function (d, str){var s = "l[k]=" + str; $m(d.data, s);}
gD = getData = function(c){ return c.getImageData(0,0, c.w, c.h) }


pD = putData = function (data, c) {
    c.putImageData(data, 0, 0)
}








gcp = getChangePut = function(c1, str, c2){var d = gD(c1);cD(d, str);pD(d,c2);}
DD = copyPasteData = getPutData = function (c,d){pD(gD(c),d)}
dit = function (d, str){  var s = "l[k]=" + str; $m(d.data, s);  }
cD = function(d, str){    var f = new Function("v","k","l","l[k]=" + str);  ea(d.data, function(v,k,l){f(v,k,l) })}
//dI = gD(c); da = dI.data;

// sets every fourth value to 50.. after the manipulation, reset the data and put the imagedata back to the canvas
fade = function(image){var image = image;
    var imageData = image.data; var length = imageData.length;
    for(var i=7; i < length; i+=4){imageData[i] = 80;}; image.data = imageData; return image;}

pixelz = function(){c.drawImage(r,0,0,300,300,0,0,300,300)
                    di = c.getImageData(0,0,300,300)
                    d = di.data
                    for (var i=0;i<imgData.data.length;i+=4){d[i]=255-d[i];
                        imgData.data[i+1]=255-imgData.data[i+1];
                        imgData.data[i+2]=255-imgData.data[i+2];
                        imgData.data[i+3]=255;}
                    ctx.putImageData(imgData,0,0);
                    c.putImageData(di, 200,200)
                    for (var i=0;i<imgData.data.length;i+=4)
                    {imgData.data[i]=255-imgData.data[i];
                        imgData.data[i+1]=255-imgData.data[i+1];
                        imgData.data[i+2]=255-imgData.data[i+2];
                        imgData.data[i+3]=255;}
                    ctx.putImageData(imgData,0,0);}

cutter = function(S){
    return function(sx,sy){
        return function(sw,sh){
            return function(D, dx,dy,dw,dh){
                D.drawImage(S,sx,sy,sw,sh,dx,dy,dw,dh)}}}}
CUT = function(S){
    return function(sx,sy){
        return function(sw,sh){
            return function(D){
                return function(dw,dh){
                    return function(dx,dy) {D.drawImage(S,sx,sy,sw,sh,dx,dy,dw,dh)}}}}}}





getDataURL=function() {canvas = $('#myCanvas');ctx = canvas.get(0).getContext('2d'); d(ctx);  ctx.fillRect(10,10,10,10);
    dataURL=canvas.get(0).toDataURL();  canvas.click(function(){alert(dataURL)})}
ctxToPng=function(ctx, name){ctx.canvas.toBlob(function(blob){saveAs(blob, name +".png")})}
ctxToImage=function(c){var i = new Image();i.src = c.canvas.toDataURL("image/png");return i}

pingy=function(ctx){ctx.canvas.toBlob(function(blob){   saveAs(blob, name +".png"  )})}

//cutty
  canvasClick = function(ctx, fxn){//works
      ctx.canvas.onclick = function(e){var X = e.clientX, Y = e.clientY; var left = ctx.canvas.offsetLeft; var top = ctx.canvas.offsetTop;  var x = X - left; var y = Y - top;
        fxn(e, x, y, X, Y);}
  }






vertex = function(){VX=[]}
drawVertex = function(ctx, x, y){setStyles(ctx,'white','black', 3); circ(ctx ,x, y, 6)}
addVertex = function(ctx,x,y){drawVertex(ctx,x,y); VX.push({x:x,y:y})}
clearVertices = function(ctx,x,y){VX=[]; resetCanvas(ctx)}



genPath = function(ctx){
    var start = VX.shift();
    ctx.moveTo(start.x, start.y); ea(VX, function(vertex, index, list){ctx.lineTo(vertex.x,vertex.y)});VX= [];  c.closePath();
}

makePath = function(ctx){ CLR(ctx);
    var start = VX.shift();
    ctx.moveTo(start.x, start.y);
    _.each(VX, function(vertex, index, list){
        ctx.lineTo(vertex.x,vertex.y)});
        ctx.fill(); ctx.closePath();ctx.clip(); imgCan(ctx, src)

}

makeCut = function(ctx){ctx.save(); clearCanvas(ctx); genPath(ctx);  ctx.clip(); dO(me,c)};// c.restore();} //G = function() {dat= getData(c) };P = function() {putData(dat,c) }

getCut = function(ctx){ l('getCut')
    var copy = gD(ctx);
    CLR(ctx);
    var start = VX.shift() ;
    ctx.moveTo(start.x, start.y)
    _.each(VX, function(vx, index, list){ctx.lineTo(vx.x, vx.y)})
    ctx.closePath();  ctx.clip(); pD(copy, ctx)}


//canvasClick(ctx, function(e,x,y){dVX(c, x, y); VX.push( {x:x,y:y})})}
//canvasClick(clr, function(e,x,y){reset(c);VX=[]})
//canvasClick(cut, function(){clr(c); getCut(c);})                       // and then: "t()"    ??? wtf



    //dI = getData(c);da=dI.data;
   // s1 = stamp(chicks,c);s2 = stamp(chicks,cc);
   // t = function(){s1(0,0)}; tt = function(){ c.drawImage(chicks,0,0)}; ttt = function(){ cc.drawImage(chicks,20,20)};






pingy=function(ctx){ctx.canvas.toBlob(function(blob){   saveAs(blob, name +".png"  )})}

blobFile = function(ctx){
    ctx.canvas.toBlob(function(blob){
        var formData = new FormData();

        formData.append("cutout", blob);

        var oReq = new XMLHttpRequest();

        oReq.open("POST", "http://localhost:4000/cutty");

        oReq.send(formData);  }) }













// 1 make circles on canvas  2 make them in response to mouse click         /
// 3 store them in an array     4 gen path from array  5 use outside of path as clipping region
// 6 apply transparency to clipping region, 7 get imageData of new canvas  8 save it as a cutty!
//make clipping region from a circle?a





































// my2y = CUT(My)(0,0)(My.w, My.h)(blue)(My.w,My.h)// onY = cutY = function(what){what(img,yellow, 10,10)}  // onB = cutB = function(what){what(img,blue, 10,10)}
//ii.src = "http://localhost:4000/" + imagePath;
//var can = document.getElementById('canvas'); canvas = $('#can'); can = canvas.get(0); ctx = can.getContext('2d');
////////////////////
// f = function(def){return new Function(def)}
// bigger:f(img,"ctx.scale(1.3,1.3);  ctx.drawImage(I, 0, 0, img.width, img.height)")
// can.width = img.width;   can.height = img.height;
//src = '/0cf14fee2317209e455ed59feb89a8c8.jpg'
//$('#invert').click(   invert   ); $('#grayscale').click(
//function flipY () {ctx.translate(img.width-1, img.height-1);    ctx.rotate(Math.PI);    ctx.drawImage(img, 0, 0, img.width, img.height);}
    /*
     / This is the canvas where you want to draw
     var canvas = document.getElementById('your-canvas');
     var ctx = canvas.getContext('2d');
     // I'll use a skyblue background that covers everything
     // Just to demonstrate - ctx.fillStyle = "skyblue"; ctx.fillRect(0, 0, canvas.width, canvas.height);
     // Create a canvas that we will use as a mask
     var maskCanvas = document.createElement('canvas');
     // Ensure same dimensions - maskCanvas.width = canvas.width; - maskCanvas.height = canvas.height;
     var maskCtx = maskCanvas.getContext('2d');
     // This color is the one of the filled shape
     maskCtx.fillStyle = "black";
     // Fill the mask - maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
     // Set xor operation - maskCtx.globalCompositeOperation = 'xor';
     // Draw the shape you want to take out - maskCtx.arc(30, 30, 10, 0, 2 * Math.PI);  maskCtx.fill();
     // Draw mask on the image, and done !  - ctx.drawImage(maskCanvas, 0, 0);​*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
