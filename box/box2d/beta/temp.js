collide=function(){

    //  I have 3 categories of things: players, obstacles and triggers.

    //  players and obstacles collide with each other  but not with themselves.

    circleDef.filter.categoryBits = 0x2
    circleDef.filter.maskBits = 0x4


    shapeDef.filter.categoryBits = 0x4
    shapeDef.filter.maskBits = 0x2

    // I want to also have trigger types...
    //     these I'm only using to detect the player and trigger events ' +
    // 'but should not be collided with by anything. ' +
    //'Logically, that should be possible by setting the maskBits to 0x0.' +
    //' The JBox2D collision code is as follows.


    collide = function(){
        return (filter1.maskBits & filter2.categoryBits) != 0 &&
            (filter1.categoryBits & filter2.maskBits) != 0
    }

    //So if the maskBits = 0, then collide should never return true.
    // I set the category bits to the next free category - 0x8.

    shapeDef.filter.categoryBits = 0x8
    shapeDef.filter.maskBits = 0x0


    // I thought this could be to do with Java's ints working differently to how I expected,
    // but I tested and found the following results:

    //      0x2 & 0x2 = 2
    //0x2 & 0x0 = 0
    // The triggers are meant to be used to trigger events.
    // This is done by implementing the CollisionListener and testing
    // for player collisions with triggers and then setting boolean flags.
    // However, when I run the simulation, the player is colliding with the triggers,
    // and so are the obstacles.

    // I've also tried setting the category and mask bits
    // to the following respective values:

    // 0x0 0x0
    // 0x8 0x8
    // 0x2 0x4
    // 0x4 0x2

    //And the player always collides with the trigger object.
    // How do I get the player and obstacles to never collide with the trigger object?



//    Box2D supports 16 collision categories.
    //      For each shape you can specify which category it belongs to.
    //    You also specify what other categories this shape can collide with.
    // For example, you could specify in a multiplayer game that:
    //    all players don't collide with each other and
    // monsters don't collide with each other,
    // but players and monsters should collide.
    // This is done with masking bits. For example:


    playerShapeDef.filter.categoryBits = 0x0002
    playerShape.filter.maskBits = 0x0004

    monsterShapeDef.filter.categoryBits = 0x0004
    monsterShapeDef.filter.maskBits = 0x0002


    //Collision groups let you specify an integral group index.
    //   You can have all shapes with the same group index always collide (positive index)
    //or never collide (negative index).
    // Group indices are usually used for things that are somehow related,
    //   like the parts of a bicycle.
    //  In the following example, shape1 and shape2 always collide,
    // but shape3 and shape4 never collide.


    shape1Def.filter.groupIndex = 2

    shape2Def.filter.groupIndex = 2

    shape3Def.filter.groupIndex = -8

    shape4Def.filter.groupIndex = -8


    // Collisions between shapes of different group indices are filtered
    // according the category and mask bits.
    // In other words, group filtering has higher precendence than category filtering.


//    This is the way I've understood how maskBits and categoryBits work. Let's say you have 3 objects : objectA, objectB and objectC.

//        Define for each object a category :

//        objectA.categoryBits = 0x0002;
//    objectB.categoryBits = 0x0004;
//    objectC.categoryBits = 0x0008;

//    Then, set the maskBits, which define the collisions rules for each categoryBits :

//        -> objectA collide with everyone (0xFFFF) and (&) not(~) objectB (0x0004)
//    objectA.maskBits = 0xFFFF & ~0x0004;

//    -> objectB collide with objectA (0x0002) or (|) objectC (0x0008) but no one else
//    objectB.maskBits = 0x0002 | 0x0008;

//    -> objectC collide with objectA (0x0002) but no one else
//    objectC.maskBits = 0x0002;



}

collide2=function(){

    m_boundaryListener=new b2BoundaryListener()



    bound=function(){

        // addEventListener(Event.ENTER_FRAME, Update, false, 0, true);

        var worldAABB  = new b2AABB();

        worldAABB.lowerBound.Set(-100.0, -100.0);
        worldAABB.upperBound.Set(100.0, 100.0);


        w=  bW(worldAABB, bV(0 ,10 ) , true)

        w.SetBoundaryListener(m_boundaryListener)


        m_sprite = new Sprite()
        addChild(m_sprite)
        dbgDraw  = new b2DebugDraw()
        dbgSprite  = new Sprite()
        m_sprite.addChild(dbgSprite)

        dbgDraw.m_sprite=m_sprite
        dbgDraw.m_drawScale=30;
        dbgDraw.m_alpha=1;
        dbgDraw.m_fillAlpha=0.5;
        dbgDraw.m_lineThickness=1;
        dbgDraw.m_drawFlags=b2DebugDraw.e_shapeBit;
        w.SetDebugDraw(dbgDraw);


        // ground
        bodyDef = new b2BodyDef()
        bodyDef.position.Set(4,12)
        boxDef = new b2PolygonDef()

        boxDef.filter.categoryBits=2;
        boxDef.SetAsOrientedBox(10, 1,new b2Vec2(5, 1.5), Math.PI/32);
        boxDef.friction=0.3;
        boxDef.density=0;
        body=w.CreateBody(bodyDef);
        body.CreateShape(boxDef);
        body.SetMassFromShapes();


        bodyDef = new b2BodyDef()
        bodyDef.position.Set(8, 12)
        boxDef = new b2PolygonDef()
        boxDef.filter.categoryBits=4
        boxDef.SetAsBox(1, 3)
        boxDef.friction=0.3
        boxDef.density=0
        body=w.CreateBody(bodyDef)
        body.CreateShape(boxDef)
        body.SetMassFromShapes()

        create_circle()
    }



    create_circle=function() {
        bodyDef = new b2BodyDef()
        bodyDef.position.x=6
        bodyDef.position.y=2
        circleDef = new b2CircleDef()
        circleDef.filter.maskBits=Math.ceil(Math.random()*3)*2
        circleDef.radius=2
        circleDef.density=1
        circleDef.friction=0.5
        circleDef.restitution=0.2
        body=w.CreateBody(bodyDef)
        body.CreateShape(circleDef)
        body.SetMassFromShapes()
    }



    Update=function(e:Event):void {
        w.st(1/30,10)

    if (m_boundaryListener.get_contact()) {
        m_boundaryListener.no_contact()
        w.dB(body)
        bodyDef = new b2BodyDef()
        create_circle()
    }




}


