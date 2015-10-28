    var S=String,N=Number,O=Object,D=Date,t=true,
        oid=$g.s.Types.ObjectId,
        ashSM=$g.s({v:S,children:[{}]}),
        sort=$g.s({n:S,t:S,ct:{type:O,default:{}}}),
        term=$g.s({t:S,meaning:S,st:{type:Date,default:Date.now}}),
        page=$g.s({n:S,s:[{h:S,ct:S}]}),
        chapter=$g.s({n:S,p:[{h:S,v:S}]})//default:{s:[{h:'sec1',v:'myS'}]}


    module.exports=MODELS={
        pic:{u:{type:oid, ref:'user', required:t},

             m:D,d:{type:D,default:D.now},

            s:N,n:S,o:S,e:S,p:S},


       user:{u:{type:S,unique:t},p:S,m:{type:S,default:'/me.png'}},


        book:{u:{type:oid,ref:'user',required:t},t:S,c:[chapter]}}


$m={};

    for(var m in MODELS){
        $m[m]=$g.m(m,$g.s(MODELS[m]));l(m)};//_.e(ms,function(m,k,ms){g[m]=g.m(m,g.s(ms[m]))   })







    //////////////////////////////////////

   old={ sorty:{type:O,default:{}},
    term:[term],

    topic:{n:{type:S,unique:t},
        vws:{type:N,default:0},
        sc:{type:N,default:0},

        ms:{type:[{vu:{type:S,unique:t},
            vws:{type:N,default:0},sc:{type:N,default:0} ,
            responses:{type:[{vu:{type:S,unique:t},vws:{
                type:N,default:0},sc:{type:N,default:0}}],
                default:[]}}],default:[]}},

    profile:{fields:{type:{
        rN:{type:S},
        age:{type:N},
        sex:{},
        desc:{type:S},
        fun:{type:[S]}},
    default:{rlN:'lulu',age:100,sex:'M',desc:'silly',fun:[]}},
        u:{type:oid,ref:'user',required:t}},

    map:{n:S,guys:O},guy:{n:{type:S,unique:t},x:N,y:N},

    teachyBook:{u:{type:oid,ref:'user',required:t},t:S,p:[page]},

    pets:[{k:{type:S,required:t},n:{type:S,default:'none'},age:{type:S,default:'?'}}],

   }