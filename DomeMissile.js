class DomeMissile extends Missile{

    constructor(x,y,height,width,color){
        super(x,y,height,width,color)
    }

    mimicEnemyMissile(EnemyVelocity,EnemyAngle){
        this.launch(EnemyVelocity,Math.abs(90-EnemyAngle))
    }

}