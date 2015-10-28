//b2ControllerEdge "A controller edge is used to connect bodies and controllers together in a bipartite graph.";
b2d.CE =b2d.CoE = b2d.ControllerEdge = b2d.Co.b2ControllerEdge

// In graph theory, 
// a bipartite graph (or bigraph)
// is a SIMPLE graph 
// whose vertices can be divided 
// into two disjoint sets  (X,Y)  ~ G = (X,Y, E)
// and
// (that is, and are each independent sets)
// such that
// every edge connects a vertex in to one in .
// ( every edge is between a vertex in X and a vertex in Y
// Vertex set and are often denoted as partite sets.
cE = b2d.CE.prototype


cE.co=cE.Co=cE.C =  function () {return this.controller}
cE.pC = function(){ return this.prevController }
cE.nC = function () {return this.nextController}
cE.pB = function () {return this.prevBody}
cE.nB = function () {return this.nextBody}
cE.b=cE.B =   function () {return this.body}