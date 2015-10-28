OBD={type:Object, default:{}},
    ARD={type:[{}], default:[]},
    DATE={type:Date, default:Date.now},
    ND={type:Number, default:0},
    SQ={type:S, required:true},


    old={ sorty:{type:O,default:{}},
    term:[term],

    topic:{

        n:{type:String, required:true},
        vws:{type:Number, default:0},
        sc:{type:N,default:0},

        ms:{type:[{vu:{type:S,unique:true},
            vws:{type:N,default:0},sc:{type:N,default:0} ,
            responses:{
                type:[
                    {vu:{
                        type:S,unique:true},vws:{
                        type:N,default:0},

                        sc:{type:N,default:0}}],
                default:[]}}],default:[]}},


    profile:{

        fields:{type:{

            realName:{type:String},

            age:{type:Number},

            sex:{},

            desc:{type:String},

            fun:{type:[String]}

        },
            default:{rlN:'lulu',age:100,
                sex:'M',desc:'silly',fun:[]}},

        user:{type:mongoose.Schema.Types.ObjectId,
            ref:'user',required:true}},

    teachyBook:{
        user:{type:mongoose.Schema.Types.ObjectId,
            ref:'user',required:true},
        title:String,
        pages:[page]
    },


    pets:[{kind:{type:String, required:true},
        name:{type:String,default:'none'},
        age:{type:String,default:'?'}}]






}