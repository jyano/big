a.locals.mf = mf;




////////////// LOADS MODELS! (onto global m) ////////////////////



g =require('mongoose'); g.connect("mongodb://localhost/wap", function(z){ l('g conn cb')})

function lI(G,o){
    for(var m in G){o[m]=g.ml(i,g.s(G[i]))};return o}

G=r('./models')

m=lI(G(g),g)






each(m.models, function(d){console.dir(d.modelName)}  )
uFF=function(userField){var arr=[]; uf=userField[0]; if(uf.paths){uf = uf.paths}; each (uf,function(field, index){if(index != '_id' && index!= 'stamp'){ arr.push(index)}}); return arr}
fields = {}; each (ideas(mongoose).user, function(userField, index){
    if(_.isArray(userField)){fields[index]=uFF(userField)}});l('u sub-docs and fields');d(fields);l();  // each(m.models.user.schema, function(sm){d(sm); l();l();})  // l("  m = memory = loadIdeas( require('./../public/thoughts/ideas')(mongoose), mongoose )")


