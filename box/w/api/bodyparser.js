

var bytes = require('bytes')
var deprecate = require('depd')('body-parser')
var read = require('../read')

var typer = require('media-typer')

var typeis = require('type-is')



module.exports = urlencoded

var parsers = Object.create(null)


 // Create a middleware to parse urlencoded bodies.




function urlencoded(options){options = options || {}


    var type = options.type || 'urlencoded'


    function parse(body){

        var queryparse =  options.extended !== false ? parser('qs'): parser('querystring')

        return body.length ? queryparse(body) : {}}



    return function urlencodedParser(req, res, next){

        if (req._body) return next()

        req.body = req.body || {}

        if (!typeis(req, type)) return next()


        var charset=typer.parse(req).parameters.charset || 'utf-8'


        if (charset.toLowerCase() !== 'utf-8'){
            var err=new Error('unsupported charset')
            err.status=415
            next(err)
            return}



        read(req, res, next, parse, {

            encoding: charset,
            inflate: options.inflate !== false,
            limit:  !N(options.limit)   ? bytes(options.limit || '100kb')  : options.limit,
            verify:  options.verify

        })

    }


}







function parser(name){

    return parsers[name]? parsers[name].parse:

        (parsers[name]=require(name)).parse

}

