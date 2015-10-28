var S=String, N=Number, O=Object, D=Date,

    oid = mongoose.Schema.Types.ObjectId,

    OIDx=function(ref){

        var g=G(arguments),

        o={
            type:mongoose.Schema.Types.ObjectId,
            ref:ref
        }

        if(g.p){ o.required=true}

        return o}







SCHEMAS = {

    user:{

        username: {type:String, required:true},     //username: {type:String, required:true},

        password: String,
        password: String,

        //m: { type: String, default: '/me.png' },
        //mug: { type: String, default: '/me.png' },  //mugData.. no mugId //mugData.. no mugId

        mug: {type: String, default:defaultMug},
        status: {type: String, default:'nothing much'},
        buds: [String]

    },




     pic:{

         user: {type: mongoose.Schema.Types.ObjectId, ref:'user', required:true},
         //user: {type: mongoose.Schema.Types.ObjectId, ref:'user', required:true},

         date: {type:Date, default: Date.now},

         modified: Date,

         size: Number,

         name: String,

         ext: String

     },

     img:{

         username: String, u: String,

         date:Date,

         data:String, d:String,

         name:String,

         dats:[Number],

         physicsData:[Number]

     },




    thing: {   name: String,  age: Number   },

     guy: {n:{type:S, required:true}, m:S,  x:N, y:N}, //map:{n:S, guys:O},

     book:{

         userId:{type:mongoose.Schema.Types.ObjectId,
             ref:'user',required:true},

         title: String,

         chapters: [ 'chapter' ]  // ???
      },

     sort: {
         username: {type:String, required:true},
         datetime: {type:Date, default:Date.now},
         title:String,
         items: {type:[{}], default:[]}
     },

     status:{
         datetime: {type:Date, default:Date.now},
         username: {type:String, required:true},
         text: String},

     availability: {
         datetime: {type:Date, default:Date.now},
         username: {type:String, required:true},
         text: String
     },

     post:{

         datetime:{type:Date, default:Date.now},
         username:{type:String, required:true},
         title:String,
         text:String,
         dataURl:String
     },

     message:{ //msg
         from: {type:String, required:true},
         to: {type:String, required:true},
         datetime: {type:Date, default:Date.now},

         title:String,
         text:String
     },


     //buddy request
     buddyRequest:{
         from:{type:String, required:true},
         to:{type:String, required:true},
         datetime:{type:Date, default:Date.now}
     },


     Topic:{

         topic: String,
         items: {type:[{}], default:[]}
     },




     Message:{

         topicId:Number, //?

         topicName: String,

         text:String,

         score:Number

     },

     Comment:{},




     link: {
         title:String,
         url:String
     }

 }




models = $m = {}

var str = ''

for(var model in SCHEMAS){
    str += (' - ' + model )
    models[model] =  mongoose.model(


        model,

        mongoose.Schema( SCHEMAS[model] )
    )


}

$l('MODELS' + str)









userSchema = new mongoose.Schema({

    u: {type:String, required:true},     //username: {type:String, required:true},

    p: String, password: String,

        pf: Object, profile: Object,

        m: { type: String, default: '/me.png' },
    mug: { type: String, default: '/me.png' },  //mugData.. no mugId


    mugURL:String,
    buds: [String]

})
picSchema=new mongoose.Schema({

    user: {type: mongoose.Schema.Types.ObjectId, ref:'user', required:true},
    //user: {type: mongoose.Schema.Types.ObjectId, ref:'user', required:true},

    date: {type:Date, default: Date.now},

    modified: Date,

        size: Number,

        name: String,

        ext: String

}) // image file ?
imageSchema=new mongoose.Schema({

    username:String,

        date: Date,

        data: String,

        name: String,

        dats: [Number],

    physicsData:[Number]

})
//
satusSchema=new mongoose.Schema({
    datetime: {type:Date, default:Date.now},
    username: {type:String, required:true},
    text: String})
availabilitySchema= new mongoose.Schema({
    datetime: {type:Date, default:Date.now},
    username: {type:String, required:true},
    text: String
})
postSchema=new mongoose.Schema({

    datetime:{type:Date, default:Date.now},
    username:{type:String, required:true},
    title:String,
        text:String,
        dataURl:String
})


buddyRequestSchema=new mongoose.Schema({
    from:{type:String, required:true},
    to:{type:String, required:true},
    datetime:{type:Date, default:Date.now}
})


mailSchema=new mongoose.Schema({
    from: {type:String, required:true},
    to: {type:String, required:true},
    datetime: {type:Date, default:Date.now},

    title:String,
    text:String
})

//
topicSchema=new mongoose.Schema({

    topic: String,
        items: {type:[{}], default:[]}
})
messageSchema=new mongoose.Schema({

    topicId:Number, //?

        topicName: String,

        text:String,

        score:Number

})
commentSchema=new mongoose.Schema({})
linkSchema= new mongoose.Schema({
    title:String,
        url:String
})
//
ashSchema = new mongoose.Schema({

    name: String,

    children:[{}]

})
sortSchema = new mongoose.Schema({

    name: String,
    text: String,
    username: {type:String, required:true},
    datetime: {type:Date, default:Date.now},
    items: {type:[{}], default:[]},
    children: {type:Object, default:{}}

})
termSchema = new mongoose.Schema({

    term: String,

    definition: String,

    datetime:{type:Date, default:Date.now}

})
//
sectionSchema = new mongoose.Schema({

    page:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Page'
},content:String,heading:String
})
pageSchema = new mongoose.Schema({
    name: String,
    content: String,
    sections: [{

        name: String,

        text: String

    }],
    chapterId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Chapter'
    },


})
chapterSchema = new mongoose.Schema({
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
    },
    text:String,
    name: String, //title?
    pages: [

        {

            name : String,

            text : String

        } ]

})
bookSchema = new mongoose.Schema({

    userId:{type:mongoose.Schema.Types.ObjectId,
        ref:'user',required:true},

    title: String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    chapters: [ 'chapter' ]  // ???
})
//
guySchema= new mongoose.Schema({

    username:{type:String, required:true},
    mugDataURL: String,
    x: Number,
    y: Number

}) //map:{n:S, guys:O},


profileSchema = new mongoose.Schema({

    //userId

    username: String,

    aboutMe: String,

    iEnjoy: String,

    iSeek: String

    })

/////////////////////////////////////////////////////////

User = mongoose.model('User', userSchema)

Book = mongoose.model('Book', bookSchema)
Chapter = mongoose.model('Chapter', chapterSchema)
Page = mongoose.model('Page', pageSchema)
Section = mongoose.model('Section', sectionSchema)

Profile = mongoose.model('Profile', profileSchema )


module.exports = models


