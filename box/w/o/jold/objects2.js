this.createjs=this.createjs||{},function(){"use strict";var a=function(a,b,c,d){this.initialize(a,b,c,d)},b=a.prototype=new createjs.Container;a.INDEPENDENT="independent",a.SINGLE_FRAME="single",a.SYNCHED="synched",b.mode,b.startPosition=0,b.loop=!0,b.currentFrame=0,b.timeline=null,b.paused=!1,b.actionsEnabled=!0,b.autoReset=!0,b.frameBounds=null,b._synchOffset=0,b._prevPos=-1,b._prevPosition=0,b._managed,b.Container_initialize=b.initialize,b.initialize=function(b,c,d,e){this.mode=b||a.INDEPENDENT,this.startPosition=c||0,this.loop=d;var f={paused:!0,position:c,useTicks:!0};this.Container_initialize(),this.timeline=new createjs.Timeline(null,e,f),this._managed={}},b.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},b.Container_draw=b.draw,b.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this._updateTimeline(),this.Container_draw(a,b),!0)},b.play=function(){this.paused=!1},b.stop=function(){this.paused=!0},b.gotoAndPlay=function(a){this.paused=!1,this._goto(a)},b.gotoAndStop=function(a){this.paused=!0,this._goto(a)},b.getLabels=function(){return this.timeline.getLabels()},b.getCurrentLabel=function(){return this._updateTimeline(),this.timeline.getCurrentLabel()},b.clone=function(){throw"MovieClip cannot be cloned."},b.toString=function(){return"[MovieClip (name="+this.name+")]"},b.Container__tick=b._tick,b._tick=function(b){this.paused||this.mode!=a.INDEPENDENT||(this._prevPosition=this._prevPos<0?0:this._prevPosition+1,this._updateTimeline()),this.Container__tick(b)},b._goto=function(a){var b=this.timeline.resolve(a);null!=b&&(-1==this._prevPos&&(this._prevPos=0/0),this._prevPosition=b,this._updateTimeline())},b._reset=function(){this._prevPos=-1,this.currentFrame=0},b._updateTimeline=function(){var b=this.timeline,c=this.mode!=a.INDEPENDENT;if(b.loop=null==this.loop?!0:this.loop,c?b.setPosition(this.startPosition+(this.mode==a.SINGLE_FRAME?0:this._synchOffset),createjs.Tween.NONE):b.setPosition(this._prevPos<0?0:this._prevPosition,this.actionsEnabled?null:createjs.Tween.NONE),this._prevPosition=b._prevPosition,this._prevPos!=b._prevPos){this.currentFrame=this._prevPos=b._prevPos;for(var d in this._managed)this._managed[d]=1;for(var e=b._tweens,f=0,g=e.length;g>f;f++){var h=e[f],i=h._target;if(i!=this&&!h.passive){var j=h._stepPosition;i instanceof createjs.DisplayObject?this._addManagedChild(i,j):this._setState(i.state,j)}}var k=this.children;for(f=k.length-1;f>=0;f--){var l=k[f].id;1==this._managed[l]&&(this.removeChildAt(f),delete this._managed[l])}}},b._setState=function(a,b){if(a)for(var c=a.length-1;c>=0;c--){var d=a[c],e=d.t,f=d.p;for(var g in f)e[g]=f[g];this._addManagedChild(e,b)}},b._addManagedChild=function(b,c){b._off||(this.addChildAt(b,0),b instanceof a&&(b._synchOffset=c,b.mode==a.INDEPENDENT&&b.autoReset&&!this._managed[b.id]&&b._reset()),this._managed[b.id]=2)},b.Container__getBounds=b._getBounds,b._getBounds=function(a,b){var c=this.DisplayObject_getBounds();return c||(this._updateTimeline(),this.frameBounds&&(c=this._rectangle.copy(this.frameBounds[this.currentFrame]))),c?this._transformBounds(c,a,b):this.Container__getBounds(a,b)},createjs.MovieClip=a;var c=function(){throw"MovieClipPlugin cannot be instantiated."};c.priority=100,c.install=function(){createjs.Tween.installPlugin(c,["startPosition"])},c.init=function(a,b,c){return c},c.step=function(){},c.tween=function(b,c,d,e,f,g){return b.target instanceof a?1==g?f[c]:e[c]:d},c.install()}();


BA=['A','B','C','D','E','F','G','H','I','K','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


WEB = {
    html:{b:"button",
        c:"checkbox",
        f:"file",
        g:'range',
        h: "hidden",
        i:"image",
        p:"password",
        r:"radio",
        R:"reset",
        s:"submit",
        t:"text"},
    tag:{
        a:'a',
        b:"button",
        c:"canvas",
        d:"div",
        f:"form",
        g:"img",
        i:'input',
        I:'iframe',
        l:'li',
        o:'ol',
        p:"p",
        s:"span",
        t:'textarea',
        T:'table',
        u:'ul',
        y:'style',
        '1':'h1',
        '2':'h2',
        '3':'h3',
        '4':'h4',
        '5':'h5',
        '6':'h6'},
    color: {



        ad:"gray",
        a:"DarkGray",
        al:"LightGray",
        all:"Gainsboro",
        ae:"LightSlateGray",
        as:"Silver",
        aed:"SlateGray",
        add:"DimGray",
        bc:"Blue",
        be:"CadetBlue",

        j:"RoyalBlue",
        bg:"SteelBlue",
        bm:"SlateBlue",
        br:"DodgerBlue",
        bs:"MediumBlue",
        b:"CornflowerBlue",
        c:"Coral",
        cl:"LightCoral",

        dd:"GoldenRod",
        dp:"DarkGoldenRod",
        dl:"PaleGoldenRod",
        dd:"LightGoldenRodYellow",


        e: "Cyan",
        et:"Turquoise",
        ett:"MediumTurquoise ",
        etp:"PaleTurquoise ",
        etd:"DarkTurquoise",
        eq:"Aqua",

        g:"ForestGreen",
        fgt:"Teal",

        fd:"DarkGreen",
        efy:"DarkCyan",
        fh:"SeaGreen",
        fg:"Green",

        f:"SpringGreen",
        gnn:"MediumSpringGreen",
        gp:"PaleGreen",
        gl:"LightGreen",
        igy:"YellowGreen",

        h:"LawnGreen",
        hgvv:"Chartreuse",
        he:"Lime",
        heg:"LimeGreen",
        hy: "GreenYellow",
        hc:"MediumSeaGreen",
        hl:"LightSeaGreen",
        ehmm:"MediumAquaMarine",
        ehm:"Aquamarine",

        i:"DarkSeaGreen",
        ig:"Olive",
        iv:"OliveDrab",
        id:"DarkOliveGreen",






        jm:"MidnightBlue",
        jn:"Navy",
        d:"DarkBlue",

        k:"Khaki",
        kd:"DarkKhaki",
        km:"Moccasin",
        kn:"NavajoWhite ",

        l: 'Lavender',
        lb:"LavenderBlush",
        lp:"PowderBlue",
        lst:"LightSteelBlue",
        lsk:"LightSkyBlue",

        m:"Magenta",
        md:"DarkMagenta",
        moo:"MediumOrchid",
        mo:"Orchid ",
        mf:"Fuchsia",
        mod:"DarkOrchid",

        nc:"Brown",
        n:"Chocolate",
        nd:"SaddleBrown",
        nn:"Sienna",
        np:"Peru",
        nr:"RosyBrown",
        ns:"SandyBrown",
        nw:"BurlyWood",
        o:"Orange ",
        od:"DarkOrange",

        pl:"Pink",
        p:"LightPink",
        q:"HotPink",

        pr:"MistyRose ",

        pt:"Thistle",


        x:"DeepPink" ,

        r:"Red",
        rm:"Maroon",
        rcr: "Crimson",
        rD:"DarkRed",
        ro:"OrangeRed ",
        ri:"IndianRed",
        rt:"Tomato",
        rfb:"FireBrick",
        s:"Salmon",
        sl:"LightSalmon",
        sd:"DarkSalmon",
        tn:"Tan",
        tb:"BlanchedAlmond",
        t:"Bisque",
        tq:"Beige",
        tw:"Wheat",
        tp:"PeachPuff",
        u:"Purple",
        ui:"Indigo",
        ub:"MediumSlateBlue",
        up:"Plum ",
        ua:"MediumPurple ",



        v:"Violet",
        vb:"BlueViolet",
        vd:"DarkViolet",
        vr:"MediumVioletRed ",
        vrl:"PaleVioletRed ",
        w:"White",
        wa: "Cornsilk",
        wb:"AliceBlue",
        wc:"WhiteSmoke",
        wf:"FloralWhite",
        wg:"GhostWhite",
        wh:"HoneyDew",
        wi:"Ivory",
        wl:"Linen",
        wm:"MintCream ",
        wp:"PapayaWhip ",
        wo:"OldLace",
        wq:"AntiqueWhite",
        ws:"SeaShell",
        ww:"Snow",
        wy:"LightCyan",
        X:"transparent",
        wz:"Azure",
        xs:"SkyBlue",
        xl:"LightBlue",
        xd:"DeepSkyBlue",
        y:"Yellow",
        yl:"LightYellow",
        yc:"LemonChiffon",
        yg:"Gold",
        z:"Black",
        zb:"DarkSlateBlue",
        zg:"DarkSlateGray"


    }, //'#':'inherit',
    cursor: {
        d:"default",
        p:"pointer",
        m:"move",
        e:"e-resize",
        ne:"ne-resize",
        nw:"nw-resize",
        n:"n-resize",
        se:"se-resize",
        sw:"sw-resize",
        s:"s-resize",
        w:"w-resize",
        t:"text",
        W:"wait",
        h:"help"},
    font: {
        face:{c:"cursive", f:"fantasy", m:"monospace",ss:"sans-serif",s:"serif"},
        style:{"#":"inherit",n:"normal",i:"italic",o:"oblique"},
        width:{n:"normal", "+":"bold", "++":"bolder", "-":"lighter", "*1":100,
            "*2":200, "*3":300,"*4":400, "*5":500, "*6":600, "*7":700,
            "*8":800, "*9":900}},

    css: {

        role:{
            n:'navigation',
            d:'dialog'
        },

        klass:{ a:'active',

            b:'button',
            bd:'button-default',
            bp:'button-primary',

                fc:'form-control',
            fg:'form-group',
            D:'divider',
            dt:'data-toggle',
            sr:'sr-only',
            dg:'data-target',
            dd:'dropdown',
            ddm:'dropdown-menu',
            ddt:'dropdown-toggle',
            ib:'icon-bar',
            n:'nav',

            f:'fade',
            m:'modal',
            md:'modal-dialog',
            mt:'modal-title',
            mb:'modal-body',

            mh:'modal-header',
            mf:'modal-footer',
            mc:'modal-content',
            nb:'navbar',

            nbn:'navbar-nav',
            nbr:'navbar-right',
            nbl:'navbar-left',
            nbt:'navbar-toggle',
            nbb:'navbar-brand',
            nbh:'navbar-header',
            co:'collapse',
            nbc:'navbar-collapse',
            dm:'dropdown-menu',
            C:'caret',
            c:'container',
            cl:'close',
            nbd:'navbar-default',
            nbi:'navbar-inverse',
            nbft:'navbar-fixed-top',

            g:'glyphicon',
            gu:'glyphicon-user',
            gfo:'glyphicon-folder-open',
            gh:'glyphicon-home',
            ge:'glyphicon-earphone',
            gp:'glyphicon-paperclip',
            ga:'glyphicon-asterisk'

        },

        atts:{
            a:'action',
            d:'disabled',
            C:'cols',
            dd:'data-dismiss',
            dt:'data-toggle',
            dg:'data-target',
            f:'for',
            h:'height',
            i:'id',
            k:'class',
            m:'method',
            n:'name',
            p:'placeholder',
            r:'role', R:'rows',
            s:'src',
            T:'type' ,
            t:'title',
            ti:'tabindex',
            u:'href',
            v:'value',
            w:'width'
        },

        type:{t:'text',s:'submit'},

        props:{

            t:'type',
            c:'checked',
            i:'id',
            v:'value',
            n:'name'},
        index:{



            kf:"@keyframes",
         j:"animation",
            an:"animation-name",
            ad:"animation-duration",
            at:"animation-timing-function",
            al:"animation-delay",
            ac:"animation-iteration-count",
            ar:"animation-direction",
            ap:"animation-play-state",

            bg:"background",
            ba:"background-attachment",
         C: "background-color",
            bi:"background-image",
            bp:"background-position",
            br:"background-repeat",
            bl:"background-clip",
            bo:"background-origin",
            bs:"background-size",

            '-':"border",
            dc:"border-color",
            ds:"border-style",
            dw:"border-width",
            dt:"border-top",
            dtc:"border-top-color"	,
            dts:"border-top-style",
            dtw:"border-top-width",
            dr:"border-right",
            drc:"border-right-color",
            drs:"border-right-style",
            drw:"border-right-width",
            db:"border-bottom",
            dbc:"border-bottom-color",
            dbs:"border-bottom-style",
            dbw:"border-bottom-width",
            dl:"border-left",
            dlc:"border-left-color",
            dls:"border-left-style",
            dlw:"border-left-width",
            di:"border-image",
            dio:"border-image-outset",
            dir:"border-image-repeat",
            disl:"border-image-slice",
            dis:"border-image-source",
            diw:"border-image-width",

        o:"outline",
            oc:"outline-color",
            os:"outline-style",
            ow:"outline-width",

            xs:"box-shadow",

            vs:"overflow-style",
            vx:"overflow-x",
            vy:"overflow-y",

            rt:"rotation",
            rp:"rotation-point",

            cp:"color-profile",
            a:"opacity",

            ri:"rendering-intent",

       h:"height",
            mh:"max-height",
            nh:"min-height",
       w:"width",
            mw:"max-width",
            nw:"min-width",

            xa:"box-align",
            xd:"box-direction",
            xf:"box-flex",
            xfg:"box-flex-group",
            bxl:"box-lines",
            xog:"box-ordinal-group",
            xo:"box-orient",
            xp:"box-pack",

      f:"font",
            ff:"font-family",
            fz:"font-size",
            fs:"font-style",
            fv:"font-variant",
            fw:"font-weight",
            fc:"@font-face",
            fj:"font-size-adjust",
            fh:"font-stretch",

            ct:"content",
            ci:"counter-increment",
            cr:"counter-reset",
       q:"quotes",
            crp:"crop",
            to:"move-to",
            pp:"page-policy",

            gc:"grid-columns",
            gr:"grid-rows",


            //linebox
            aj:"alignment-adjust",
            ab:"alignment-baseline",
            bh:"baseline-shift",

            dm:"dominant-baseline",
            daj:"drop-initial-after-adjust",
            dal:"drop-initial-after-align",
            dbj:"drop-initial-before-adjust",
            dbl:"drop-initial-before-align",
            dz:"drop-initial-size",
            dv:"drop-initial-value",

            ix:"inline-box-align",
            sk:"line-stacking",
            ss:"line-stacking-shift",
            st:"line-stacking-strategy",
            th:"text-height",
            ls:"list-style",
            li:"list-style-image",
            lp:"list-style-position",
            lt:"list-style-type",

      m:"margin",
            mt:"margin-top",
            mr:"margin-right",
            mb:"margin-bottom",
            ml:"margin-left",

            qd:"marquee-direction",
            qp:"marquee-play-count",
            qs:"marquee-speed",
            mq:"marquee-style",

      d:"padding",
            pt:"padding-top",
            pr:"padding-right",
            pb:"padding-bottom",
            pl:"padding-left",
//page media
            ft:"fit",
            fp:"ftp",
            e:"image-orientation",
      g:"page",
      s:"size",
//positioning
     b:"bottom",
        cl:"clear",
        clp:"clip",
            cu:"cursor",
     y:"display",
            fl:"float",
     l:"left",
            of:"overflow",
     r:"right" ,
     t:'top',
     p:'position',
     v:'visibility',
     z:"z-index",
//table
            co:"border-collapse",
            sp:"border-spacing",
            cs:"caption-side",
            ec:"empty-cells",
            ly:"table-layout",
//text
     c:"color",
     n:"direction",
            lts:"letter-spacing",
            lh:"line-height",
            ta:"text-align",
            td:"text-decoration",
            ti:"text-indent",
            ttf:"text-transform",
            ub:"unicode-bidi",
            va:"vertical-align",
            wh:"white-space",
            wo:"word-spacing",
            hp:"hanging-punctuation",
            pu:"punctuation-trim",
            tal:"text-align-last",
     tj:"text-justify",
            tl:"text-outline",
            tv:"text-overflow",
            tsh:"text-shadow",
            twr:"text-wrap",
            wbr:"word-break",
            wwr:"word-wrap",
//hyperlink
            tg:"target",
            tn:"target-name",
            tw:"target-new",
            tp:"target-position",
//2d/3d
            tf:"transform",
            tfo:"transform-origin",
            ts:"transform-style",
            ps:"perspective",
            po:"perspective-origin",
            bv:"backface-visibility",
//transition
            tr:"transition",
            ty:"transition-property",
            tu:"transition-duration",
            tt:"transition-timing-function",
            te:"transition-delay",
//user interface
            pe:"appearance",
            xz:"box-sizing",
            ic:"icon",
            ni:"nav-index",
            nl:"nav-left",
            dd:"nav-down",
            nr:"nav-right",
            nu:"nav-up",
            oo:"outline-offset",
            rs:"resize"},
        textTransformation:{c:"capitalize",u:"uppercase",l:"lowercase"},
        textStretch:{n:"normal",sc:"semi-condensed",c:"condensed",ec:"extra-condensed",uc:"ultra-condensed",
            se:"semi-expanded",e:"expanded",  ee:"extra-expanded",ue:"ultra-expanded"},
        textDecoration:{u:"underline", o:"overline", l:"line-through", b:"blink"},
        textAlignment:{l:"left",r:"right",c:"center",j:"justify"},
        textBaseline:{s:'sub',S:'super',t:'top',tt:'text-top',m:'middle',b:'bottom',tb:'text-bottom'},
        display:{
            i:"inline",
            b:"block",
            ib:"inline-block",
            t:"table",
            n:"none",
            '#':"inherit",
            it:"inline-table",
            l:"list-item",
            c:"table-column",
            r:"table-row",
            cg:"table-column-group",
            rg:"table-row-group",
            p:"table-caption",
            h:"table-header-group",
            f:"table-footer-group",
            e:"table-cell"},
        position:{s:"static",  a: "absolute",r:"relative",f:"fixed","#":"inherit"},
        overflow:{v:"visible",h:"hidden",s:"scroll",a:"auto","#":"inherit"},
        outlineStyle:{
            n:'none',
            h:'hidden',
            '.':'dotted',
            '-':'dashed',
            s:'solid',
            d:'double',
            g:'groove',
            r:'ridge',
            '>':'inset',
            '<':'outset',
            "#":'inherit'},
        outlineWidth:{'|':'thin','||':'medium','|||':'thick'}},

    event: {
        kd:"keydown",
        ku:"keyup",
        kp:"keypress",
        md:"mousedown",
        mm:"mousemove",
        mo:"mouseout",
        me:"mouseenter",
        ml:"mouseleave",
        mu:"mouseup",
        mv:"mouseover",
        fi:"focusin",
        fo:"focusout",
        a:"change",
        b:"blur",
        c: "click",
        d:"dblclick",
        f:"focus",
        h:"hover" ,
        l:"load",
        o:"one",
        r:"ready",
        y:"select",
        k:"submit",
        s:"scroll",
        z:"resize"},
    jquery: {
        //previous,previousAll
        a:"after",
        A:'add',
        ab:'addBack',
        at:"appendTo",
        ap:"append",

        ac:"addClass",

        ar:"removeAttr",
        b:"before",
        cr:"removeClass",
        C:'contents',
        cl:"clone",
        d:"detach",
        e:"empty",
        F:'first',
        hc:"hasClass",
        h:"height",
        H:'hide',
        ia:"insertAfter",
        ib:"insertBefore",
        ih:"innerHeight",
        iw:"innerWidth",
        l:"html",
        L:'last',
        n:'next',
        na:'nextAll',
        po:"position",

        o:"offset",
        op:"offsetParent",
        oh:"outerHeight",
        ow:"outerWidth",
        pp:"prepend",
        P:"parent",
        ps:"parents",
        pu:"parentsUntil",
        p:"prop",
        pt:"prependTo",
        pr:"removeProperty",
        q:"eq",
        r:"remove",
        ra:"replaceAll",
        rw:"replaceWith",
        s:"css",
        S:'show',
        sl:"scrollLeft",
        sb:"siblings",
        st:"scrollTop",
        tt:"attr",
        tc:"toggleClass",
        t:"text",
        u:"unwrap",
        v:"val",w:"width",
        wr:"wrap",
        wa:"wrapAll",
        wi:"wrapInner",
        z:"size"},
    context: {
        method:{a:"arc",a2:"arcTo",z:"bezierCurveTo",
            b:"beginPath",
            c:"closePath",
            j:"clip",
            d:"drawImage",
            l:"lineTo",
            m:"moveTo",
            X:"clearRect",
            f:"fill",fr:"fillRect",ft:"fillText",
            s:"stroke",sr:"strokeRect",st:"strokeText",
            g:"createLinearGradient",
            lg:"createLinearGradient",
            rg:"createRadialGradient",
            o:"createRadialGradient",
            O:"createRadialGradient",
            S:"save", r:"rect",R:"restore",
            sc:"scale", tr:"translate" , rt:"rotate",
            p:"createPattern",
            q:"quadraticCurveTo",
            P:"putImageData",
            G:"getImageData",
            C:"createImageData",

            ip:"isPointInPath",
            is:"isPointInStroke",

            mt:"measureText",





            t:"transform",tf:"setTransform"},
        index: {// also part of S: tfMk, clPth
            ga:'globalAlpha',   //num
            wb:'shadowBlur',    //num
            wx:'shadowOffsetX',   //num
            wy:'shadowOffsetY' ,  //num
            lw:'lineWidth' ,     //num
            ml:'miterLimit',      //num
            fs:'fillStyle',                //str:col
            ss:'strokeStyle',              //str:col
            wc:'shadowColor',              //str:col
            lc:'lineCap',                  //str    XLineCap
            lj:'lineJoin',                  //str      XLineJoin
            fo:'font',                     //str
            ta:'textAlign',                    //str
            tb:'textBaseline',   //?
            gc:'globalCompositeOperation'  //str (XGlobComp)
        },
        pattern:{r:'repeat',x:"repeat-x",y:"repeat-y",z:"no-repeat"},
        globalCompositeOperation:{d:'destination-over',
            da:'destination-atop',
            do:'destination-out',
            di:'destination-in',
            s:'source-over',a:'source-atop',
            o:'source-out', i:'source-in',
            l:'lighter', x:'xor',c:'copy'},
        lineJoin:{r:'round',b:'bevel',m:'miter'},
        lineCap:{r:'round',b:'butt',s:'square'}
    },
    createjs: {event:{d:"mousedown",m:"pressmove",u:"pressup",r:"rotation"}}}



;(function(){

    var W = WEB, f=W.font, s=W.css, x=W.context;

    Web = {
        c:W.color,
        e:W.event,
        q:W.jquery,
        f:{
            ff:f.face,
            fs:f.style,
            fw:f.width,
            fh: s.fontStretch},


        s:{
            k: s.klass,
            T: s.type,
            r: s.role,
            a: s.atts,    p: s.props,
            i:  s.index,
            tt: s.textTransformation,
            td: s.textDecoration,
            ta: s.textAlignment,
            tb: s.textBaseline,
            d:  s.display,
            P:  s.position,
            of: s.overflow,
            os: s.outlineStyle,
            ow: s.outlineWidth
        },
        x:{
            x: x.method,
            i:x.index,
            pt: x.pattern,
            gc: x.globalCompositeOperation,
            lj: x.lineJoin,
            lc: x.lineCap
        },
        h: W.html,
        t:W.tag,
        cu:W.cursor,
        j:{e:W.createjs.event}}

}())









ooo=function(){

    var w = Web;

    ooo={
        r: w.s.r,
        k: w.s.k,
        T: w.s.T,
        a: w.s.a,
        p: w.s.p,
        t:w.t,
        c:w.c,
        S:w.s.i,
        X:w.x.i,
        q:w.q,
        x:w.x.x,
        f:function(){}, o:function(){},
        ff:w.f.ff,
        fs:w.f.fs,
        fw:w.f.fw,
        fh:w.f.fh,
        os:w.s.os,
        ow:w.s.ow,
        pt:w.x.pt,
        gc:w.x.gc,
        lj:w.x.lj,
        lc:w.x.lc,
        e:w.e,
        je:w.j.je,
        tt:w.s.tt,
        td:w.s.td,
        ta:w.s.ta,
        tb:w.s.tb,
        i:w.h,
        d:w.s.d,
        p:w.s.P,
        of:w.s.of,
        cu:w.cu,


        R:{
            C:'c',
            t:'i',
            fs:'c',
            ss:'c',
            wc:'c',
            dc:'c',
            ds:'os'},



        D1:{
            width:800, height:300,
            color:'red', backgroundColor:'blue',
            padding:20, margin:20,
            display:'inline-block',
            font:'50px fantasy'} ,

        D:{
            w:10,
            h:10,
            c:'r',
            C: 'b',
            p:20,
            m:20,
            d:'inline-block',
            f:'50px fantasy'

        } ,
        dD:{
            w:100,
            h:100,
            c:'r',
            C:'y',
            p:20,
            m:20,
            //d:'inline-block',
            f:'50px fantasy'

        } ,

        iD:{
            w:200,
            h:10,
            c:'r',
            C: 'b',
            p:20,
            m:20,
            d:'inline-block',
            f:'50px fantasy'

        },
        M:{

            S:{
                c:'color',
                bc:'backgroundColor',
                wc:'shadowColor',
                f:'fillStyle',
                s:'strokeStyle',
                gc:'globalCompositeOperation',
                lj:'lineJoin',
                lc:'lineCap',
                wx: 'shadowOffsetX',
                wy: 'shadowOffsetY',
                wb: 'shadowBlur'

            },

            m:{o:{a:1,b:'test',c:['a','b','c']}},

            d:{
                df:{w:300, h:300, c:'/', C:'!', p:20, m:20,  y:'ib', f:'50px fantasy'},
                df1:{ w:300,h:300,    c:'/', C:'!',   p:20,    m:20, y:'ib',  f:'50px fantasy'},
                df2:{w:300,h:300,c:'/',bc:'!',p:20,m:20}}}
    }

}

ooo()


