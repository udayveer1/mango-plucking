class Stone{
    constructor(x, y){
        var options = {
            IsStatic:true
       
        }
 this.image=loadImage("images/stone.png")
        this.body = Bodies.rectangle(x,y,30,30,options)
        World.add(world, this.body);
    }

    display(){
   image(this.image,this.body.position.x,this.body.position.y,30,30)
       
        
    }
}