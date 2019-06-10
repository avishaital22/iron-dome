class Missile{

    constructor(x,y,height,width,color){
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.color = color
        this.velocity = 0
        this.angle = 0
    }

    //velocity in coordinates per second

    calcDistance(curX,curY,destX,destY){
        return(Math.sqrt(Math.abs(destX-curX)+Math.abs(destY-curY)))
    }

    launch(angle,velocity){
        this.velocity = velocity
        this.angle = angle
        setInterval(function(){this.x = this.x*velocity*Math.cos(angle * Math.PI / 180)
                               this.y = this.y*velocity*Math.sin(angle * Math.PI / 180)}, 1000);
    }

}
