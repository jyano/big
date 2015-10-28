//this is from iphone book createjs games


//chapter8
ORB=function(){


    var Orb = function(){
        this.initialize()}

    Orb.prototype = new createjs.Shape()

    Orb.prototype.Shape_initialize = Orb.prototype.initialize

    Orb.prototype.initialize = function(){ this.Shape_initialize() }

    window.Orb = Orb

}








//this is to teach stage machine
ORBS=function(){z()

    SuperStage(500).a()




    (function(){

    window.game = window.game || {}

    var GameStates = {
        MAIN_MENU:0,
        RUN_SCENE:1,
        GAME:10,
        GAME_OVER:20
    }

    var GameStateEvents = {

        MAIN_MENU: 'main-menu-event',
        GAME_OVER:'game-over-event',
        GAME:'game-event'

    }

    window.game.GameStates = GameStates
    window.game.GameStateEvents = GameStateEvents


}())


    (function(window){

        window.game = window.game || {}

        function GameMenu(){this.initialize()}

        var p =GameMenu.prototype = EaselContainer()

        p.Container_initialize = p.initialize
        p.titleTxt= null
        p.count = 0

        p.initialize = function(){

            this.Container_initialize()
            this.addBG()
            this.addTitle()
            this.addOrbs()
            this.addButton()
        }

        p.addBG=function(){

            var bg= new createjs.Shape()

            bg.graphics.beginFill('0').drawRect(0,0,canvas.width, canvas.height)
            this.addChild(bg)

        }

        p.addTitle = function(){

            this.titleTxt=EaselText("ORB DESTROYER!", 'b', 40)
            this.titleTxt.x(canvas.width/2)
            this.titleTxt.y(200)
            this.titleTxt.textAlign = 'center'
            this.addChild(this.titleTxt)
        }


        p.addOrbs=function(){

        var i, orb
            var orbContainer = EaselContainer()
            var numOrbs = 5
            var orbSize= 20
            var orbPadding = 10
            var orbsPosition = 300

            for(i=0; i<numOrbs; i++){
                orb = new PulsingOrb('r', orbSize)
                orb.x = i * ((orbSize * 2)+orbPadding)
                orbContainer.a(orb)
            }

            orbContainer.x=orbContainer.y = orbsPositionthis.addChild(orbContainer)

        }





        p.addButton=function(){
            var btn, event
            btn = new ui.SimpleButton('Play Game')
            btn.on('click', this.playGame, this)
            btn.regX = btn.width/2
            btn.x = canvas.width/2
            btn.y = 400
            btn.setButton({upColor:'g', color:'r',borderColor:'b',overColor:'y'})
            this.addChild(btn)
        }

        p.playGame=function(e){this.dispatchEvent(game.GameStateEvents.GAME)}


        p.run=function(tickEvent){this.titleTxt.alpha = cos(this.count++ * 0.1) * .4 + .6}


        window.game.GameMenu=GameMenu

    }(window))

}












