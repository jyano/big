ball = {rad: 20, x: 0, y: 0, dx:1, dy:1, coins:0, health:1000}
ball.draw = function (){
    ct.fillStyle = 'blue'; ct.strokeStyle = 'yellow';
    ct.beginPath();
    ct.arc(this.x, this.y, this.rad, 0, Math.PI*2, false);
    ct.fill(); ct.stroke();
}




gameUpdate = function(){


    ball.x = ball.x + ball.dx;
    ball.y = ball.y + ball.dy;
    //ball.srad = ball.rad * .9995;
    if (ball.x < 0) {ball.x = 1180}
    if (ball.y < 0) {ball.y = 580}
    if (ball.x > 1200) {ball.x = 20}
    if (ball.y > 600) {ball.y = 20}






    _.each(coins, function (coin, index, list) {
        if (coin.x > (ball.x - ball.rad) && (coin.x < (ball.x + ball.rad)) && (coin.y > (ball.y - ball.rad)) && (coin.y < (ball.y + ball.rad)) )
        {
            //alert (index);
            //_.pluck(list,[index]);

            delete coins[index];
            //obj = new Coin; coins.push(obj);
            //obj = new Coin; coins.push(obj);
            ball.coins = ball.coins + 1;

        }
    });



    _.each(aliens, function (alien, index, list) {
        if (alien.x > (ball.x - alien.rad) && (alien.x < (ball.x + alien.rad)) && (alien.y > (ball.y - alien.rad)) && (alien.y < (ball.y + alien.rad)) )
        {
            //alert (index);
            //_.pluck(list,[index]);

            //delete alien[index];
            ball.health = ball.health - 1;

        }

        _.each(bullets, function (bullet, bullet_index, bullet_list) {
            if (alien.x > (bullet.x - bullet.rad) && (alien.x < (bullet.x + bullet.rad)) && (alien.y > (bullet.y - bullet.rad)) && (alien.y < (bullet.y + bullet.rad)) )
            {
                //alert (index);
                //_.pluck(list,[index]);

                //delete alien[index];
                delete aliens[index];
                delete bullets[bullet_index];
                obj = new Alien; aliens.push(obj);
                //obj = new Alien; aliens.push(obj);
            }

        });




    });



};





Coin=function () {


    this.x = _.random(0,1200);
    this.y = _.random(0,600);
    this.dx = _.random(0,10)-5;
    this.dy = _.random(0,10)-5;

    this.rad = 10;


    this.draw = function () {
        ct.fillStyle = 'yellow'; ct.strokeStyle = 'black';
        ct.beginPath();
        ct.arc(this.x, this.y, this.rad, 0, Math.PI*2, false);
        ct.fill(); ct.stroke();
    }




    this.update = function () {
        if (this.x < 0) {this.x = 1180}
        if (this.y < 0) {this.y = 580}
        if (this.x > 1200) {this.x = 20}
        if (this.y > 600) {this.y = 20}

        this.x = this.x + this.dx ; this.y = this.y + this.dy ;}


}



var coins = [];
for (var i = 0; i < 10; i++) {obj = new Coin; coins.push(obj);}









Alienx =function() {


    this.x = _.random(0,1200);
    this.y = _.random(0,600);
    this.dx = _.random(0,10)-5;
    this.dy = _.random(0,10)-5;

    this.rad = 25;


    this.draw = function () {
        ct.fillStyle = 'rgba(124,252,0,0.5)'; ct.strokeStyle = 'black';
        ct.beginPath();
        ct.arc(this.x, this.y, this.rad, 0, Math.PI*2, false);
        ct.fill(); ct.stroke();

        ct.fillStyle = 'orange'; ct.strokeStyle = 'black';
        ct.beginPath();
        ct.arc(this.x, this.y, 10, 0, Math.PI*2, false);
        ct.fill(); ct.stroke();
    }




    this.update = function () {
        if (this.x < 0) {this.x = 1180}
        if (this.y < 0) {this.y = 580}
        if (this.x > 1200) {this.x = 20}
        if (this.y > 600) {this.y = 20}
        this.rad = this.rad * 1.001;
        this.x = this.x + this.dx ; this.y = this.y + this.dy ;}


}



var aliens = [];
for (var i = 0; i < 5; i++) {obj = new Alien; aliens.push(obj);}














Bulletx =function(x, y, dx, dy) {


    this.x = x
    this.y = y
    this.dx = dx * -5
    this.dy = dy * -5
    this.rad = 8;


    this.draw = function () {
        ct.fillStyle = 'pink'; ct.strokeStyle = 'white';
        ct.beginPath();
        ct.arc(this.x, this.y, this.rad, 0, Math.PI*2, false);
        ct.fill(); ct.stroke();
    }




    this.update = function () {
        //if (this.x < 0) {this.x = 1180}; if (this.y < 0) {this.y = 580}; if (this.x > 1200) {this.x = 20};if (this.y > 600) {this.y = 20}

        this.x = this.x - this.dx ; this.y = this.y - this.dy ;}


}



var bullets = [];



