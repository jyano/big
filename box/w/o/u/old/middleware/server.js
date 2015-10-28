module.exports = function (){li('cortex');


    http = r('http');  path = r('path'); fs = r('fs'); connect = r('connect');
    e = r('express'); a = e(); a.g = a.get; a.p = a.post;

    var MongoStore = require('connect-mongo')(e);cookieParser = e.cookieParser('xyz');
    sessionStore = new connect.middleware.session.MemoryStore();mongoStore = new MongoStore({ db: 'brain' })
    flash = r('connect-flash');sio = r('socket.io');SessionSockets = r('session.socket.io');

    a.set('port',  process.env.PORT || 4000);


    a.set('views',    __dirname + "/../../wapps/");  //vws = __dirname + '/../../skull/faces/';a.set('views', vws);  a.set('views', vws);


    a.set('view engine', 'jade');  //vws = __dirname + '/../skull/'
    a.use(e.favicon());  a.use(e.logger('dev')); if ('development' == a.get('env')) {  a.use(e.errorHandler()); }
    a.use(e.bodyParser({keepExtensions: true, uploadDir: __dirname + "/../mind/img" }));
    a.use(e.methodOverride()); a.use(cookieParser); a.use(e.session({store: mongoStore})); a.use(flash());



// PRELOAD JS // AUTO-GENERATE CREATEJS MANIFEST JSON OB BASED ON FILES IN MIND/EMOTIONS/ART DIRECTORY
    var synapse = fs.readdirSync('./mind/emotions/art');   arr = [];     mf = [];
    for (var pic in synapse)  {
        id = path.basename(  synapse[pic]).split('.')[0];
        src = '/art/' + path.basename(  synapse[pic] );
        obStr = "{src: '" + src + "', id:'" + id + "'}";
        arr.push( obStr );
    }
    list = arr.join();
    mf = ("[" + list + "]")


//console.log('mf: ') //console.dir(mf) //tell('graphics manifest') // ls('preload','used fs.readdirSync to set mf = to createjs graphics manifest', mf)




////////////// LOADS MODELS! (onto global m) ////////////////////
    g = mongoose = require('mongoose'); g.connect("mongodb://localhost/wap", function(z){ l('g conn cb')})

    loadIdeas = function (ideas, ob){
        for (var idea in ideas) {ob[idea] = mongoose.model(idea, mongoose.Schema(ideas[idea]))}
        return ob}

    ideas = require('./../mind/thoughts/ideas');  m = memory = loadIdeas(ideas (mongoose), mongoose ) ;
    each(m.models, function(d){console.dir(d.modelName)}  )

    uFF = function (userField){
        var arr = []; uf = userField[0];   if( uf.paths ){ uf = uf.paths }
        each (uf,function(field, index){if(index != '_id' && index!= 'stamp'){ arr.push(index)}})
        return arr}

    fields = {}; each (ideas(mongoose).user, function(userField, index){
        if(_.isArray(userField))  { fields[index]=  uFF(userField) } });       l('u sub-docs and fields');d(fields);l();
// each(m.models.user.schema, function(sm){d(sm); l();l();})  // l("  m = memory = loadIdeas( require('./../mind/thoughts/ideas')(mongoose), mongoose )")






}