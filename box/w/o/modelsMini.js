var S=String, N=Number, O=Object, D=Date, t=true,


    oid = $g.s.Types.ObjectId,


    OID=function(ref){

        var g=G(arguments),

        o={

            type:oid,

            ref:ref
        }

        if(g.p){o.required=true}

        return o},

    OBD={type:O, default:{}},

    ARD={type:[{}], default:[]},

    DATE={type:Date, default:Date.now},

    ND={type:N, default:0},

    SQ={type:S, required:true},



    //ash schema?

    ashSM=$g.s({

        v:String,    //?

        ch:[{}]  //children

    }),


    sort=$g.s({

        n:S, //name
        t:S,  //title

        ct:OBD  //content {type:O,default:{}}

    }),


    term=$g.s({

        t:S,  //term

        meaning:S,

        st:DATE  //stamp

    }),




    page=$g.s({

        n:S,

        s:[{

            h:S, //header

            ct:S  //content

        }]

    }),


    chapter=$g.s({

        n:S,  //name

        p:[{   //pages

            h:S,  //header
            v:S

        }]

    })

    //default:{s:[{h:'sec1',v:'myS'}]}




 MODELS={

    user:{

        u:SQ,   //username

        p:S,    //password

        pf:O,   //profile



        m:{     //mug

            type:S,
            default:'/me.png'
        },



        buds:[S]  // array of usernames?

    },




     pic:{
         u:OID('user','+'),
         m:D,
         d:DATE,

         s:N,
         n:S,
         o:S,

         e:S, //ext?

         p:S
     },




     img:{u:S, m:D, d:S, n:S, dats:[N]},

     guy:{n:SQ, m:S,  x:N, y:N}, //map:{n:S, guys:O},

    //book:{u:{type:oid,ref:'user',required:t},t:S,c:[chapter]},


     //sort
     srt:{ u:SQ,   dt:DATE,  t:S, i: ARD},


     //status
     sts:{dt:DATE,  u:SQ,  c:S},


     //avail
     avail: {c:S},


     //post
     pst:{dt:DATE,  u:SQ,  t:S, c:S, du:S},


     //message
     msg:{fr:SQ, to:SQ, dt:DATE,  m:S,  c:S},

     //buddy request
     req:{fr:SQ,  to:SQ, dt:DATE},


     //topic
     tpc:{

         t:S,  //topic
         i:ARD
     },


     Topic:{},

     Message:{

         topic:String,

         message:String,

         score:Number

     },

     Comment:{},




     course:{title:S, url:S}}


cL('models:')

var $m={}

for(var m in MODELS){

    $m[m] =  $g.m(
        cL(m),
        $g.s(MODELS[m])
    )


}






//book schema
bookSch=$g.s({

    name: S,

    author: OID('user')

})



//chapter schema
chapterSch=$g.s({
    book:OID('Book'),
    content:S,
    title:S

})





//page schema
pageSch=$g.s({

    chapter:OID('Chapter'),  content:S,  name:S

})




sectionSch=$g.s({page:OID('Page'),content:S,heading:S})






Book=$g.m('Book',bookSch)
Chapter=$g.m('Chapter',chapterSch)
Page=$g.m('Page',pageSch)
Section=$g.m('Section',sectionSch)








module.exports=$m



old={ sorty:{type:O,default:{}},
    term:[term],

    topic:{

        n:SQ,
        vws:ND,
        sc:{type:N,default:0},

        ms:{type:[{vu:{type:S,unique:t},
            vws:{type:N,default:0},sc:{type:N,default:0} ,
            responses:{
                type:[
                    {vu:{
                        type:S,unique:t},vws:{
                type:N,default:0},

                sc:{type:N,default:0}}],
                default:[]}}],default:[]}},


    profile:{
        fields:{type:{
        rN:{type:S},
        age:{type:N},
        sex:{},
        desc:{type:S},
        fun:{type:[S]}},


        default:{rlN:'lulu',age:100,
            sex:'M',desc:'silly',fun:[]}},


        u:{type:oid,
            ref:'user',required:t}},

    teachyBook:{
        u:{type:oid,ref:'user',required:t},
        t:S,p:[page]},


    pets:[{k:SQ,
        n:{type:S,default:'none'},
        age:{type:S,default:'?'}}]






   }