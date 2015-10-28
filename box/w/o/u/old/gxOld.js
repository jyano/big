dat = function(image){var image = image; return [0, 0, image.width, image.height, 0,0,image.width,image.height]    }

cat = {} ;
cat.tw = function (image,c,p){return [0, 0, image.width, image.height, 0,0,200,200]   }
cat.actual = function (image,c,p){return [0, 0, image.width, image.height, 0,0,image.width,image.height]   }
cat.most = function (image,c,p){return [0, 0, image.width, image.height, 0,0,image.width *.8,image.height *.8]   }
cat.half = function (image,c,p){return [0, 0, image.width/2, image.height/2, 0,0,image.width/2,image.height/2]   }
cat.big = function (image,c,p){return [0, 0, image.width, image.height, 0,0,image.width*2, image.height*2 ] }
cat.fit = function (image,c,p){return [0, 0, image.width, image.height, 0,0, px.canvas.width, px.canvas.height ] }
cat.bord = function (image,c,p){return [0, 0, image.width, image.height, 0 + (.5 * p), 0 + (.5 * p), c.canvas.width - p, c.canvas.height - p ] }


catClass =  function(image){
    this.tw = function (image,c,p){return [0, 0, image.width, image.height, 0,0,200,200]   }
    this.actual = function (image,c,p){return [0, 0, image.width, image.height, 0,0,image.width,image.height]   }
    this.most = function (image,c,p){return [0, 0, image.width, image.height, 0,0,image.width *.8,image.height *.8]   }
    this.half = function (image,c,p){return [0, 0, image.width/2, image.height/2, 0,0,image.width/2,image.height/2]   }
    this.big = function (image,c,p){return [0, 0, image.width, image.height, 0,0,image.width*2, image.height*2 ] }
    this.fit = function (image,c,p){return [0, 0, image.width, image.height, 0,0, px.canvas.width, px.canvas.height ] }
    this.bord = function (image,c,p){return [0, 0, image.width, image.height, 0 + (.5 * p), 0 + (.5 * p), c.canvas.width - p, c.canvas.height - p ] }
}

Cat = function(image){return new catClass(image)}


paint = function(image, canvas){
    var image = image; var canvas = canvas; var cat = Cat(image);
    var pen = Pen(image, canvas);
    return function(what, pam){var pam = pam; pen(cat[what](image,canvas,pam)); }
}




//           [0,0,300,300,0,0,300,300]


sourceImage = function(image,canvas){
    var canvas = canvas; var image = image;
    return function(a,b,c,d,e,f,g,h){canvas.drawImage(image,a,b,c,d,e,f,g,h)}}

usePen = function (pen, data){ pen.apply(pen, data }

configPen = function(pen){var pen = pen;  return function(data){usePen(pen, data)}}

Pen = function(image, canvas){
    var image = image; var canvas = canvas;
    var pen = configPen(soureImage(image,canvas));
    w.pen = pen; return pen;
}



//ea([p1,p2,p3,p4], function(can){  can('bord',300)  }   )




//D = function (px){var pp = px; return function(arr){pp.draw.apply(pp,  arr) }      }





runOnImageLoad = function (img, fn) { img.addEventListener('load', fn); return img }


setPNGSource =  function (img, png) {img.src = '/' + png + '.png'; return img}


createInitLoadImageObject = function(png, func){return setPNGSource(runOnImageLoad(new Image(),func),png)}



getCtx =  function(id){return $('#' + id).get(0).getContext('2d')  }
tinyCtx = function(ctx){ctx.D = ctx.drawImage; ctx.T = function(pic){this.D(pic, 0,0,300,300,0,0,300,300  )}; return ctx}
lC = function(name,id){w[name]=tinyCtx(getCtx(id)); }
loadImageSetItToVariable = function(name,png){w[name]=createInitLoadImageObject(png); }
j$ = function(code){    $( f(code) )   }




image = function(image){loadImageSetItToVariable(image,image)}






































