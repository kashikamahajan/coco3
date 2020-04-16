class cocoBuilding{
    constructor(){
      
      this.image =cbi;
      this.Visiblity = 255;

        }
  
   display(){
     //console.log(this.body.speed);

       background("black");
       
       push();
       
       gs=7;
       game.updateState(gs);
       if(frameCount%5===0)
       {
        this.Visiblity = this.Visiblity - 5;
       }
       
       tint(255,this.Visiblity);
       imageMode(CENTER);
       image(this.image,400, 200, 800, 400);
       pop();

       if(this.Visiblity===0)
       window.open("https://kashikamahajan.github.io/cocostage2/");
     }
    }
  
    
  
  
  
