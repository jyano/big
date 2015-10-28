function justDontWork() {
	asEdgeX = function (v1, v2) {//for reference!
		this.m_vertexCount = 2;
		this.Reserve(2);
		this.m_vertices[0].SetV(v1)
		this.m_vertices[1].SetV(v2)
		this.m_centroid.x = 0.5 * (v1.x + v2.x)
		this.m_centroid.y = 0.5 * (v1.y + v2.y)
		this.m_normals[0] = b2Math.CrossVF(b2Math.SubtractVV(v2, v1), 1)
		this.m_normals[0].Normalize()
		this.m_normals[1].x = (-this.m_normals[0].x)
		this.m_normals[1].y = (-this.m_normals[0].y)
	}
	patch2huh = function () {
		/*
		
		 this.m_radius = polygon.m_radius;
		
		 break;
		 case b2Shape.e_edgeShape:
		
		 var edge = (shape instanceof b2EdgeShape ? shape : null);
		 this.m_vertices = new Vector(2, true);
		 this.m_vertices[0] = edge.m_v1;
		 this.m_vertices[1] = edge.m_v2;
		 this.m_count = 2;
		 this.m_radius = edge.m_radius;
		
		 break;
		
		
		 default:
		
		 b2Settings.b2Assert(false); */
	}
	patch2X = function () {
		b2EdgeShape = b2d.Shapes.b2EdgeShape
		e = b2EdgeShape.prototype
		e.TestPoint = function (transform, p) {
			return false
		}
		e.Copy = function () {
			var s = new b2EdgeShape(this.m_v1, this.m_v2)
			s.Set(this)
			return s
		}
		e.Set = function (other) {
			this.__super.Set.call(this, other);
			if (Box2D.is(other, b2EdgeShape)) {
				var other2 = (other instanceof b2EdgeShape ? other : null);
				this.s_supportVec.SetV(other2.s_supportVec);
				this.m_v1.SetV(other2.m_v1);
				this.m_v2.SetV(other2.m_v2);
				this.m_coreV1.SetV(other2.m_coreV1);
				this.m_coreV2.SetV(other2.m_coreV2);
				this.m_normal.SetV(other2.m_normal);
				this.m_direction.SetV(other2.m_direction);
				this.m_cornerDir1.SetV(other2.m_cornerDir1);
				this.m_cornerDir2.SetV(other2.m_cornerDir2);
			}
		}
		e.RayCast = function (output, input, transform) {
			var tMat;
			var rX = input.p2.x - input.p1.x;
			b2EdgeAndCircleContact = b2d.Dynamics.Contacts.b2EdgeAndCircleContact
			b2EdgeAndCircleContact.Destroy = function (contact, allocator) {
			}
			b2EdgeAndCircleContact.prototype.Reset = function (fixtureA, fixtureB) {
				this.__super.Reset.call(this, fixtureA, fixtureB);
				b2Settings.b2Assert(fixtureA.GetType() == b2Shape.e_edgeShape);
				b2Settings.b2Assert(fixtureB.GetType() == b2Shape.e_circleShape);
			}
			b2EdgeAndCircleContact.prototype.Evaluate = function () {
				var bA = this.m_fixtureA.GetBody();
				var bB = this.m_fixtureB.GetBody();
				this.b2CollideEdgeAndCircle(this.m_manifold, (this.m_fixtureA.GetShape() instanceof b2EdgeShape ? this.m_fixtureA.GetShape() : null), bA.m_xf, (this.m_fixtureB.GetShape() instanceof b2CircleShape ? this.m_fixtureB.GetShape() : null), bB.m_xf);
			}
			b2EdgeAndCircleContact.prototype.b2CollideEdgeAndCircle = function (manifold, edge, xf1, circle, xf2) {
				manifold.m_pointCount = 0;
				var tPoint;
				var dX = 0;
				var dY = 0;
				var positionX = 0;
				var positionY = 0;
				var tVec;
				var tMat;
				tMat = xf2.R;
				tVec = circle.m_p;
				var cX = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
				var cY = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
				dX = cX - xf1.position.x;
				dY = cY - xf1.position.y;
				tMat = xf1.R;
				var cLocalX = (dX * tMat.col1.x + dY * tMat.col1.y);
				var cLocalY = (dX * tMat.col2.x + dY * tMat.col2.y);
				var dist = 0;
				var radius = edge.m_radius + circle.m_radius;
				tVec = edge.m_normal;
				var separation = tVec.x * dX + tVec.y * dY;
				var v1 = edge.m_v1;
				var v2 = edge.m_v2;
				if (separation < Number.MIN_VALUE) {
					manifold.m_pointCount = 1;
					manifold.m_type = b2Manifold.e_faceA;
					manifold.m_localPlaneNormal.SetV(edge.m_normal);
					manifold.m_localPoint.x = 0.5 * (v1.x + v2.x);
					manifold.m_localPoint.y = 0.5 * (v1.y + v2.y);
					manifold.m_points[0].m_localPoint.SetV(circle.m_p);
					manifold.m_points[0].m_id.key = 0;
					return;
				}
				var u1 = (cLocalX - v1.x) * (v2.x - v1.x) + (cLocalY - v1.y) * (v2.y - v1.y);
				var u2 = (cLocalX - v2.x) * (v1.x - v2.x) + (cLocalY - v2.y) * (v1.y - v2.y);
				if (u1 <= 0.0) {
					if ((cLocalX - v1.x) * (cLocalX - v1.x) + (cLocalY - v1.y) * (cLocalY - v1.y) > radius * radius) return;
					manifold.m_pointCount = 1;
					manifold.m_type = b2Manifold.e_faceA;
					manifold.m_localPlaneNormal.x = cLocalX - v1.x;
					manifold.m_localPlaneNormal.y = cLocalY - v1.y;
					manifold.m_localPlaneNormal.Normalize();
					manifold.m_localPoint.SetV(v1);
					manifold.m_points[0].m_localPoint.SetV(circle.m_p);
					manifold.m_points[0].m_id.key = 0;
				}
				else if (u2 <= 0) {
					if ((cLocalX - v2.x) * (cLocalX - v2.x) + (cLocalY - v2.y) * (cLocalY - v2.y) > radius * radius) return;
					manifold.m_pointCount = 1;
					manifold.m_type = b2Manifold.e_faceA;
					manifold.m_localPlaneNormal.x = cLocalX - v2.x;
					manifold.m_localPlaneNormal.y = cLocalY - v2.y;
					manifold.m_localPlaneNormal.Normalize();
					manifold.m_localPoint.SetV(v2);
					manifold.m_points[0].m_localPoint.SetV(circle.m_p);
					manifold.m_points[0].m_id.key = 0;
				}
				else {
					var faceCenterX = 0.5 * (v1.x + v2.x);
					var faceCenterY = 0.5 * (v1.y + v2.y);
					separation = (cLocalX - faceCenterX) * tVec.x + (cLocalY - faceCenterY) * tVec.y;
					if (separation > radius) return;
					manifold.m_pointCount = 1;
					manifold.m_type = b2Manifold.e_faceA;
					manifold.m_localPlaneNormal.x = tVec.x;
					manifold.m_localPlaneNormal.y = tVec.y;
					manifold.m_localPlaneNormal.Normalize();
					manifold.m_localPoint.Set(faceCenterX, faceCenterY);
					manifold.m_points[0].m_localPoint.SetV(circle.m_p);
					manifold.m_points[0].m_id.key = 0;
				}
			}
			Box2D.inherit(b2NullContact, Box2D.Dynamics.Contacts.b2Contact);
			b2NullContact = b2d.Dynamics.Contacts.b2NullContact
			b2NullContact.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
			b2NullContact.b2NullContact = function () {
			}
		}
	}
	// https://developer.chrome.com/devtools/docs/workspaces !!!!!
	CHAINDEF = function () {
		z()
		w = b2d.mW({
			grav: 0
		})
		b = w.ball()
		chainDef = new b2d.chainDef()
		//es = new b2d.Shapes.b2EdgeShape()
		chainDef.friction = 0.5
		chainDef.restitution = 0.0
		chainDef.isALoop = true
		chainDef.vertices.length = 0
		chainDef.userData = "vertex"
		ratio = 1
		vertexList = [
			{x: 120, y: 548},
			{x: 267, y: 480},
			{x: 484, y: 561},
			{x: 532, y: 328},
			{x: 602, y: 520},
			{x: 337, y: 608}
		]
		_.each(vertexList, function (vertex) {
			chainDef.vertices.push(V(vertex))
		})
		chainDef.vertexCount = chainDef.vertices.length
		gb = w.GetGroundBody()
		edgeshape = gb.CreateShape(chainDef)
		w.DestroyBody(edgeshape.GetBody())
	}
	CHAINDEF2 = function () {
		z()
		w = b2d.mW({grav: 0})
		b = w.ball(600, 100)
		ec = new b2d.Shapes.b2EdgeChainDef()
		ec.vertices.push(V(100, 100))
		ec.vertices.push(V(200, 200))
		ec.friction = 0.5
		ec.restitution = 0.0
		ec.isALoop = true
		ec.vertices.length = 0
		ec.userData = "vertex"
		f = b2d.fixtureDef()
		f.shape = ec
		e = w.A(b2d.dynamicDef(), f)
		w.A(
		)
	}
	EDGES = function () {
		z()
		w = b2d.mW({grav: 0})
		b = w.ball(600, 100)
		//  es = new b2d.Shapes.b2EdgeShape()
		//  edge.Set(v1, v2);
		createEdgeBody = function (world, bodyType, x1, y1, x2, y2) {
			bx = (x1 + x2) / 2
			by = (y1 + y2) / 2
			bodyDef = b2d.dynamicDef(
					bx, by
			)
			len = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
			bodyDef.angle = 0;
			body = w.createBody(bodyDef)
//ADD EDGE FIXTURE TO BODY
			MakeEdgeShape(body, len, bodyType, 1, 0, 1)
//CALCULATE ANGLE OF THE LINE SEGMENT
			body.setTransform(bx, by, MathUtils.atan2(y2 - y1, x2 - x1));
			return body
		}
		edge = function (body, len, BodyDef, bodyType, density, restitution, friction) {
			fixtureDef = new FixtureDef()
			fixtureDef.density = density
			fixtureDef.restitution = restitution
			fixtureDef.friction = friction
			es = new EdgeShape()
//SET LENGTH IN BOX COORDINATES
			boxLen = ConvertToBox(len)
//SETTING THE POINTS AS OFFSET DISTANCE FROM CENTER
			es.set(-boxLen / 2, 0, boxLen / 2, 0);
			fixtureDef.shape = es;
			body.createFixture(fixtureDef);
			fixtureDef.shape.dispose();
		}
	}
	EDGESHAPE = function () {
		z()
		patch2()
		b2d.mW()
		bd = b2d.staticDef()
		b = w.CreateBody(bd)
		f = b2d.fixtDef()
		// es = b2d.edge(V(10,10 ,'-'), V(1,100,'-'))
		es = new b2d.Shapes.b2EdgeShape(
				V(100, 100, '-'),
				V(200, 200, '-'),
				V(0, 0, '-'),
				V(10, 20, '-'),
				V(250, 106, '-'),
				V(10, 20, '-')
		) //m_v1, m_v2
		/*
		 es.m_cornerDir1=V(100,100)
		 es.m_cornerDir2=V(200,10)
		 es.m_coreV1=V(100,100)
		 es.m_coreV2=V(200,10)
		 es.m_v1=V(100,100)
		 es.m_v2=V(200,10)
		
		 */
		f.shape = es
		f.m_shape = es
		//f.shape = b2d.circle()
		b.CreateFixture(f)
		w.ball()
	}
}
 