 GRAVITY=function(){





            var body:b2Body;
            var bodyDef:b2BodyDef;
            var boxDef:b2PolygonDef;

            var circleDef:b2CircleDef;


            bodyDef = new b2BodyDef()
            bodyDef.position.Set(10, 12)

     boxDef = new b2PolygonDef()

     boxDef.SetAsBox(30, 0.5)

     boxDef.friction= .3

     boxDef.density = 0

     body = m_world.CreateBody(bodyDef)



     body.CreateShape(boxDef)

     body.SetMassFromShapes()



     bodyDef = new b2BodyDef()

     bodyDef.position.Set(10, 0)


            boxDef = new b2PolygonDef();
            boxDef.SetAsBox(30, 0.5);

            boxDef.friction=0.3;
            boxDef.density=0;

            body=m_world.CreateBody(bodyDef);

            body.CreateShape(boxDef);

            body.SetMassFromShapes();


            for (var i:int = 1; i < 10; i++) {
                bodyDef = new b2BodyDef();
                bodyDef.position.x=Math.random()*12+2;
                bodyDef.position.y=Math.random()+5;
                var rX:Number=Math.random()+0.2;
                var rY:Number=Math.random()+0.2;
                if (Math.random()<0.5) {
                    boxDef = new b2PolygonDef();
                    boxDef.SetAsBox(rX, rY);
                    boxDef.density=1.0;
                    boxDef.friction=0.5;
                    boxDef.restitution=0.2;
                    bodyDef.userData = new Sprite();
                    bodyDef.userData.name="box";
                    body=m_world.CreateBody(bodyDef);
                    body.CreateShape(boxDef);
                }


                else {
                    circleDef = new b2CircleDef();
                    circleDef.radius=rX;
                    circleDef.density=1.0;
                    circleDef.friction=0.5;
                    circleDef.restitution=0.2;
                    bodyDef.userData = new Sprite();
                    bodyDef.userData.name="circle";
                    body=m_world.CreateBody(bodyDef);
                    body.CreateShape(circleDef);
                }

                body.SetMassFromShapes();
                addChild(bodyDef.userData);
            }
        }



    }






public function Update(e:Event):void {

    var ant_gravity = b2Vec2;

 m_world.Step(m_timeStep, m_iterations);

 for (var bb:b2Body = m_world.m_bodyList; bb; bb = bb.m_next) {
    if (bb.GetUserData()!=null) {
        if (bb.GetUserData().name=="circle") {
            ant_gravity = new b2Vec2(0.0,-20.0*bb.GetMass());
            bb.ApplyForce(ant_gravity, bb.GetWorldCenter());
        }
    }
}
}