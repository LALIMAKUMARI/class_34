class Chain{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:200
    }
    this.chain=Constraint.create(options);
    this.pointB= pointB
    World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB;
        push();
        strokeWeight(4);
        stroke("yellow");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}