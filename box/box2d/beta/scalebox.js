
SCALEBOX=function(){
    var body:b2Body;
    public var m_world:b2World;
    public var m_iterations:int=10;
    public var m_timeStep:Number=1.0/30.0;
    private var mousePVec:b2Vec2 = new b2Vec2();
    public function shrink() {
        var worldAABB:b2AABB = new b2AABB();
        var bodyDef:b2BodyDef;
        var boxDef:b2PolygonDef;
        var circleDef:b2CircleDef;
        worldAABB.lowerBound.Set(-100.0, -100.0);
        worldAABB.upperBound.Set(100.0, 100.0);
        m_world=new b2World(worldAABB,new b2Vec2(0,10),true);
        // debug draw start
        var m_sprite:Sprite;
        m_sprite = new Sprite();
        addChild(m_sprite);
        var dbgDraw:b2DebugDraw = new b2DebugDraw();
        var dbgSprite:Sprite = new Sprite();
        m_sprite.addChild(dbgSprite);
        dbgDraw.m_sprite=m_sprite;
        dbgDraw.m_drawScale=30;
        dbgDraw.m_alpha=1;
        dbgDraw.m_fillAlpha=0.5;
        dbgDraw.m_lineThickness=1;
        dbgDraw.m_drawFlags=b2DebugDraw.e_shapeBit;
        m_world.SetDebugDraw(dbgDraw);
        // debug draw end
        bodyDef = new b2BodyDef();
        bodyDef.position.Set(10, 12);
        boxDef = new b2PolygonDef();
        boxDef.SetAsBox(30, 3);
        boxDef.friction=0.3;
        boxDef.density=0;
        body=m_world.CreateBody(bodyDef);
        body.CreateShape(boxDef);
        body.SetMassFromShapes();
        //
        bodyDef = new b2BodyDef();
        bodyDef.position.x=5;
        bodyDef.position.y=5;
        circleDef = new b2CircleDef();
        circleDef.radius=3;
        circleDef.density=1.0;
        circleDef.friction=0.5;
        circleDef.restitution=0.2;
        body=m_world.CreateBody(bodyDef);
        body.CreateShape(circleDef);
        body.SetMassFromShapes();
        //
        addEventListener(Event.ENTER_FRAME, Update, false, 0, true);
        stage.addEventListener(MouseEvent.MOUSE_DOWN, GetBodyAtMouse);
    }
    public function GetBodyAtMouse(includeStatic:Boolean=false):b2Body {
        var mouseXWorldPhys = (mouseX)/30;
        var mouseYWorldPhys = (mouseY)/30;
        mousePVec.Set(mouseXWorldPhys, mouseYWorldPhys);
        var aabb:b2AABB = new b2AABB();
        aabb.lowerBound.Set(mouseXWorldPhys - 0.001, mouseYWorldPhys
            - 0.001);
        aabb.upperBound.Set(mouseXWorldPhys + 0.001, mouseYWorldPhys
            + 0.001);
        var k_maxCount:int=10;
        var shapes:Array = new Array();
        var count:int=m_world.Query(aabb,shapes,k_maxCount);
        var body:b2Body=null;
        for (var i:int = 0; i < count; ++i) {
            if (shapes[i].GetBody().IsStatic()==false||includeStatic) {
                var tShape:b2Shape=shapes[i] as b2Shape;
                var inside:Boolean=tShape.TestPoint(tShape.GetBody().GetXForm(),mousePVec);
                if (inside) {
                    body=tShape.GetBody();
                    break;
                }
            }
        }
        // if I selected a body...
        if (body) {
            // I know it's a circle, so I am creating a b2CircleShape variable
            var circle:b2CircleShape=body.GetShapeList() as b2CircleShape;
            // getting the radius..
            var r=circle.GetRadius();
            // removing the circle shape from the body
            body.DestroyShape(circle);
            // creating a new circle shape
            var circleDef:b2CircleDef;
            circleDef = new b2CircleDef();
            // calculating new radius
            circleDef.radius=r*0.9;
            circleDef.density=1.0;
            circleDef.friction=0.5;
            circleDef.restitution=0.2;
            // attach the shape to the body
            body.CreateShape(circleDef);
            // determine new body mass
            body.SetMassFromShapes();
        }
        return body;
    }
    public function Update(e:Event):void {
        m_world.Step(m_timeStep, m_iterations);



}



