

ROPE=function(){


    var canvas_width,canvas_height,mouse_x, mouse_y,canvas_width_m, canvas_height_m
    mouse_pressed = false
    mouse_joint = false
    scale = 30


//Draw a w, this method is called in a loop to redraw the w

    function draw_w(w, context){
        //convert the canvas coordinate directions to cartesian coordinate direction by translating and scaling
        ctx.save()
        ctx.translate(0 , canvas_height)
        ctx.scale(1 , -1)
        w.DrawDebugData()
        ctx.restore()

        //write some text
        ctx.textAlign = 'right'
        ctx.fillStyle = '#fff'
        ctx.font = 'bold 15px arial'
        ctx.fillText('Rope using box2d',
                canvas_width - 10, canvas_height - 10)}



    function createWorld(){

        w = bW(gravity=bV(0,-10),true)


        w.SetDebugDraw(new b2DebugDraw().sS(document.getElementById("canvas").getContext("2d"));.sDS(scale).sFA(0.5).sLT(1.0).sF(b2DebugDraw.e_shapeBit);)


        //ceiling
        ground = ceiling = createBox(w, canvas_width_m / 2, canvas_height_m - 0.5, 16 , 1, {type : b2Body.b2_staticBody});

        var last_link = ceiling,
            last_anchor_point = bV(0, -.5),
            revolute_joint = rev(),
            r_height = 1.1 //height of rope elements, in metres ofcourse

        //rope
        for (var i = 1; i <= 10; i++){
            var body=createBox(w, canvas_width_m / 2 , canvas_height_m - 1 - i * 1.5, 0.25 , r_height);
            revolute_joint.A(last_link).B(body).lAA(last_anchor_point )
                .lAB(bV(0 , r_height/2))
            last_anchor_point = bV(0, -1 * r_height/2);
            w.cJ(revolute_joint)
            last_link = body}

        var body = createBox(w, canvas_width_m / 2 , canvas_height_m - 1 - i * 1.5, r_height , r_height, {density : 5.0});
        revolute_joint.A(last_link).B(body).lAA(last_anchor_point).lAB(bV(0 , r_height/2) )
        last_anchor_point = bV(0, -1 * r_height/2)
        w.cJ(revolute_joint)
        return w}



//Create standard boxes of given height , width at x,y

    function createBox(w, x, y, width, height, options){
        //default setting
        options = $.extend(true, {
                'density' : 1.0 , 'friction' : 1.0 , 'restitution' : 0.5 ,
                'type' : b2Body.b2_dynamicBody},
            options)



        return w.cB(
            bDf().ps(x,y).t(options.type).uD(options.user_data),
            fDf().d(options.density).f(options.friction)
                .r(options.restitution).s(pSh().sAB( width/2 , height/2 )))}



    function step(){


        w.s(1/(fps*.8),8 ,3).clF()

        draw_w(w , ctx) //redraw the w
        sT(step,1000/60) //call this function again after 1/60 seconds or 16.7ms

    }


    //Convert coordinates in canvas to box2d w
    function get_real(p){return bV(p.x + 0, canvas_height_m - p.y)}

    function GetBodyAtMouse(includeStatic){
        var mouse_p = bV(mouse_x, mouse_y);

        var aabb = new b2AABB();
        aabb.lowerBound.Set(mouse_x - 0.001, mouse_y - 0.001);
        aabb.upperBound.Set(mouse_x + 0.001, mouse_y + 0.001);

        var body = null;

        // Query the w for overlapping shapes.



        function GetBodyCallback(fixture){
            var shape = fixture.GetShape();

            if (fixture.GetBody().GetType() != b2Body.b2_staticBody || includeStatic)
            {
                var inside = shape.TestPoint(fixture.GetBody().GetTransform(), mouse_p);

                if(inside){
                    body = fixture.GetBody()
                    return false}
            }

            return true;
        }

        w.QueryAABB(GetBodyCallback, aabb);
        return body}

// main entry point
    $(function(){
        var canvas = $('#canvas');

        ctx = canvas.get(0).getContext('2d');

        //get internal dimensions of the canvas
        canvas_width = pI(canvas.attr('width'))
        canvas_height = pI(canvas.attr('height'))

        canvas_height_m = canvas_height / scale
        canvas_width_m = canvas_width / scale

        //first create the w
        w = createWorld()


        //If mouse is moving over the thing
        $(canvas).mousemove(function(e){
            var p = get_real(bV(e.pageX/scale, e.pageY/scale))

            mouse_x = p.x
            mouse_y = p.y

            if(mouse_pressed && !mouse_joint){
                var body = GetBodyAtMouse()

                if(body){ //if joint exists then create


                    mouse_joint = w.cJ(
                        new b2MouseJointDef().A(ground).B(body).tg(p).cC(1)
                            .mF(1000 * body.GetMass()).dR(0))

                    body.aw(1)}}


            if(mouse_joint){ mouse_joint.sT(p) }})

        $(canvas).mousedown(function(){ //flag to indicate if mouse is pressed or not
            mouse_pressed = true})


        /*
         When mouse button is release, mark pressed as false and delete the mouse joint if it exists
         */

        $(canvas).mouseup(function(){
            mouse_pressed = false;
            if(mouse_joint){w.dJ(mouse_joint)
                mouse_joint = false}})
        step()
    })
}
