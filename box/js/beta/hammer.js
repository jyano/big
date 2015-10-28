HAMMER=function(){
z()
    d=$divA().w(100).h(100).c('r').a().id('hammerdrag')

    var hammertime = new Hammer(d.el, {})

   // hammertime.on('pan', function(ev) {   console.log(ev);  d.left(d.left()+1  ) })

    hammertime.on('panright', function(ev) {
        // alert('pan')
        console.log(ev);

        d.left(d.left()+1
        )

    })


    hammertime.on('panleft', function(ev) {
        // alert('pan')
        console.log(ev);

        d.left(d.left()-1
        )

    })
}






HAMMER1=function(){

    z()

    d=$div().w(100).h(100).c('r').a().id('hammerdrag')

    var hammertime = new Hammer(d.el, {})

    hammertime.on('pan', function(ev) {
      alert('pan')
        console.log(ev);


    })


    hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });




    c=$can().a()

    c.can.addEventListener('touchmove',function(ev){

       $l('touchmove')

        e=ev
    })





    Hammer(c.can).on('drag', function(){
        alert('drag')
    })



   hammertime = new Hammer(c.can, {})


    hammertime.on('pan', function(ev){

        c.x(c.x()+10)
        console.log(ev) })






    //By default it adds a set of tap, doubletap, press, horizontal pan and swipe, and the multi-touch pinch and rotate recognizers. The pinch and rotate recognizers are disabled by default because they would make the element blocking, but you can enable them by calling:


    hammertime.get('pinch').set({ enable: true });

    hammertime.get('rotate').set({ enable: true });


   hammertime.on('pinch', function(ev) {alert('pinch')})

    ctx = c.can.getContext('2d')


}