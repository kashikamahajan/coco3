class Game
{
    constructor()
{
  this.Trexbutton=createButton('Play The Trex Running Game');
  this.PPbutton=createButton('Play The Ping Pong Game');
  this.Lucidiumbutton=createButton('Play Lucidium Game');
  this.startButton=createButton('Start The Journey');
  //form.title.hide();
  this.greeting1=createElement('h2');
  this.greeting2=createElement('h3');
  
}

updateState(state){
        gs=state;
}



/*createGameButton()
{
    this.Trexbutton=createButton('Play The Trex Running Game');
    this.PPbutton=createButton('Play The Ping Pong Game');
    this.Lucidiumbutton=createButton('Play Lucidium Game');
    this.startButton=createButton('Start The Journey');
    form.title.hide();
    this.greeting1=createElement('h2');
    this.greeting2=createElement('h3');
    
}*/

hide()
{
  
    this.Trexbutton.hide()
    this.PPbutton.hide();
    this.Lucidiumbutton.hide();
    this.startButton.hide();
    form.title.hide();
    this.greeting1.hide();
    this.greeting2.hide();
   
}


displayGames()
{
  ++t;
if(t===2)
{
    this.greeting1.html("Hi "+geekName);
    this.greeting1.position(330,50);

    this.greeting2.html("Which game would you like to play before starting your Javatastic journey?");
}
    imageMode(CENTER);
    image(bg2,400,200,800,400);
    this.greeting2.position(100,100);
    this.Trexbutton.position(150,235);

    this.PPbutton.position(350,235);

    this.Lucidiumbutton.position(525,235);


    this.startButton.position(370,300);

    this.startButton.mousePressed(()=>{
            
            
      this.greeting1.hide();
      this.greeting2.hide();
      
      gs=5;
      game.updateState(gs);

    });


    this.Lucidiumbutton.mousePressed(()=>{
            
            
        this.greeting1.hide();
        this.greeting2.hide();
        
        gs=2;
        game.updateState(gs);

      });


      this.Trexbutton.mousePressed(()=>{
            
            
        this.greeting1.hide();
        this.greeting2.hide();
        
        
        
        gs=3;
        game.updateState(gs);

      });

      this.PPbutton.mousePressed(()=>{
            
            
        this.greeting1.hide();
        this.greeting2.hide();
        
       
        
        gs=4;
        game.updateState(gs);

      });
      this.startButton.mousePressed(()=>{
            
            
        this.greeting1.hide();
        this.greeting2.hide();
        
        
        cb=new cocoBuilding(); 
        cb.display();
        
        gs=5;
        game.updateState(gs);
        this.Trexbutton.hide()
    this.PPbutton.hide();
    this.Lucidiumbutton.hide();
    this.startButton.hide();
    form.title.hide();
    this.greeting1.hide();
    this.greeting2.hide();

      });



}



}
