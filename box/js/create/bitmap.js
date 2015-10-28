
cjs.bm = cjs.bitmap =function(img){

    var g=G(arguments),
        img=g[0],
        bm

   bm = new cjs.Bitmap(img)

       if(g.N){bm.rCenter()}

    return bm}


