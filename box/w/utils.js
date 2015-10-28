_ = require('./us')
F = _.isFunction
S = _.isString
U = _.isUndefined
D = function(a,b){return !U(a)}
A = _.isArray
O = _.isObject
G = function(a){
    if(!_.isArguments(a)){return}
    var p, n, m,d
    a=_.toArray(a)

    if(_.last(a)==='+'){p=a.pop()}
    if(_.last(a)==='-'){n=a.pop()}
    if(_.last(a)==='*'){m=a.pop()}
    if(_.last(a)==='/'){d=a.pop()}

    return D(a,{
        z: a.length,
        f: _.first(a),l: _.last(a),
        r: _.rest(a),i: _.initial(a),
        p:p,
        P:!p,m:m,M:!m,d:d,D:!d,n:n,N:!n

    })
}
$l = function(a,b){
    cL=function(a){console.log(a);return a}
    if(!b){return cL(a)} cL('{'+a+':'+b+'}');return b}
$d = function(a,b){cD=function(a){console.dir(a);return a}
    if(!b){return cD(a)} cL(a);return cD(b)}


