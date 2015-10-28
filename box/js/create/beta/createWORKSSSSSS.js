// i initially did auto-conversion of all pics to CJS display objects (type 'bitmap')");  pic = image.id;
// var b = new createjs.Bitmap(qu.getResult(pic)); p[pic] = b; // p[pic] = b;


function graphicsReady(){
    stage = new createjs.Stage(cj.c);l('stage:');


    gx = {}
    ch = new createjs.Bitmap(qu.getResult('chicks'));  ch.x = 0; ch.y = 100;
    stage.addChild(ch);
    createjs.Ticker.setFPS(30);


    createjs.Ticker.addEventListener("tick", stage);


    width = function (bob){ return bob.getBounds().width  * bob.scaleX   }
    height = function (bob){ return bob.getBounds().height  * bob.scaleY   }
    halfWidth =  function(bob){return width(bob)/2 }
    halfHeight =  function(bob){return height(bob)/2 }
    xCenter = function(bob){ return  halfWidth(bob) + bob.x  }
    yCenter = function(bob){ return  halfHeight(bob) + bob.y  }
    centerAt = function(bob, x,y){bob.x = x - halfWidth(bob);bob.y = y - halfHeight(bob)}



    //// this does dragging!!!!!!
 ch.addEventListener("mousedown", function(event) { SLIDE(event)  })



function SLIDE (event){    var MX1 = event.rawX;     var MY1 = event.rawY;    var XPOS1 = ch.x;       var YPOS1 = ch.y;

    ch.addEventListener("pressmove", function(event){
        var DY  = event.rawY - MY1;  var DX  = event.rawX - MX1;
        ch.x = XPOS1 + DX;   ch.y =   YPOS1 + DY})}



// ch.addEventListener("dblclick", function(event) { var x = ch.l('calling scaley');  scaley(event)  })






  ch.addEventListener("mousedown", function(event){SCALE(event)})

    SCALE = function (event){  var MY1 = event.rawY;   var SC1 = ch.scaleY;   var XC1 = xCenter(ch);    var YC1 = yCenter(ch);
     ch.addEventListener("pressmove", function(event) {
           var DY = event.rawY - MY1;
           var SCALEBY = (DY/500);
           ch.scaleX=ch.scaleY = SC1 - SCALEBY;
           centerAt(ch, XC1, YC1)})}











}


   $(function(){

    qu=new createjs.LoadQueue(true);
    qu.addEventListener("complete", graphicsReady);
    qu.loadManifest(mf);

   })

scl = function(x){ch.scaleX = x; ch.scaleY = x}

     rawVsStageXY = function(){
         stage.mouseMoveOutside = true;
          // only way to see the diff:  dbl click works on parts of img you cant see but that it would be on top off (off stage)
         ch.addEventListener("click", function(event) {
             console.log('clk', event.rawX, event.rawY);
         })
         ch.addEventListener("dblclick", function(event) {
             console.log('dbl', event.stageX, event.stageY);      // stick with raw, unless you hae a reason ??
         })}



plop = function (image, x, y, bobName) {  // gotta fix plop!
    if (!x) {return ploop(image)}
    if (!y) {return ploop(image, x)}
}             // works great
  //  var bob = new createjs.Bitmap(qu.getResult(image));   bob.x = x;  bob.y = y;   stage.addChild(bob); if(bobName) {window[bobName] = bob} else {return bob}}

ploop = function(image, factoryName){fxn = function(x, y, bobName){
    if (bobName) {  plop(image, x,y, bobName)} else {return plop(image, x, y)} if(factoryName) {window[factoryName] = fxn; return}else {return fxn}}   }
ploo = function(nam, x, y){ if (!x){plop (nam, nam) }   else {plop(nam, x,y,nam)} }
plo = function(){ each(mf, function(ob){ploo(ob.id)}) }
lop = function(guy, ob){   if (!ob){ob = window}; stage.removeChild(ob[guy]); delete(ob[guy]); }
lopper = function (ob){return function(guy){lop(guy,ob) }}


































// imgStage = function(img,name){var bob = new createjs.Bitmap(qu.getResult(img));  bob.x = 0;  bob.y = 0;stage.addChild(bob); window['name'] = bob }





//  console.log(mf.join()) // for each id name, make a pop on g by that name, and set it to the pic's cjs-bitmap  and also add it to the stage
    // ??  and  additional (plugin) dendrites (js files) are executed...


