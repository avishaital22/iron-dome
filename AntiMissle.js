class AntiMissile{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.angle=0;
    }

    //velocity in pixels per second

    follow(x,y){
        let angle = Math.tan(((y-this.y)/(x-this.x))*(Math.PI/180));
        this.x=x-(4*Math.cos(angle)*(Math.PI/180));
        this.y=y-(4*Math.sin(angle)*(Math.PI/180));
    }
}
export default AntiMissile;