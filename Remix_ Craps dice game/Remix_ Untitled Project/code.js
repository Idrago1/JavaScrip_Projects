
var player1=1;
var yourMoney=500;
var Ai=500;
var Aibet;
var dice1;
var dice2;
var bob ;
var bob3;
var fish;
var bet;
var firstai;
var tottalAi;
var yourtottal;
var round = 1;
var betArray= [1,.20,.30,.40,.50,.60,.70,.80,.90,1];
 hideElement("lol");
 hideElement("image4");
 hideElement("label7");
 playSound("assets/On-The-Wall---.mp3", true);
 
 onEvent("button5", "click", function( ) {
   setScreen("screen6");
 });
 
 onEvent("button6", "click", function( ) {
   setScreen("screen2");
 });
 Aibet= Ai*betArray[randomNumber(0,8)];
 tottalAi=Aibet;
 Ai=Ai-Aibet;
 setText("lol2", "$"+Aibet);
 setText("Rick", "His Money $"+Ai);
 
onEvent("button1", "click", function( ) {
  setScreen("screen2");
  
});

onEvent("button2", "click", function( ) {
  setScreen("screen3");
  hideElement("image1");
  setText("yourM", "$"+yourMoney);
  
  hideElement("button3");
  
});

onEvent("button3", "click", function( ) {
  speed(100);
  if (player1==1) {
    var dice3=randomNumber(1,6);
    
    var dice4=randomNumber(1,6);
    
    var bob2= dice3+dice4;
    bet=getNumber("text_input1");
    console.log(bob2);
    dicerole(dice3,dice4);
    
    if (bob==bob2) {
      
      yourMoney = yourMoney+tottalAi;
      tottalAi=0;
     
      setText("yourM", "$"+yourMoney);
      endcheck();
      change();
      Ai1();
    } else {  
      yourtottal=bet;
      tottalAi=tottalAi+yourtottal;
      endcheck();
       tottal();
      change();
      Ai1();
    }
  }
  
  
});

onEvent("button4", "click", function( ) {
  bet=getNumber("text_input1");
  yourMoney=yourMoney-bet;
  setText("yourM", "$"+yourMoney);
  dice1= randomNumber(1,6);
  dice2= randomNumber(1,6);
  console.log(dice1);
  console.log(dice2);
  bob= dice1+dice2;
  //console.log(bob);
  
  if (player1==1) {
    showElement("image1");
    speed(75);
    hideElement("image1");
    speed(100);
    dicerole(dice2,dice1);
    showElement("image4");
    
    showElement("lol");
    setText("lol", "$"+bet);
    //diceman();
    showElement("button3");
    endcheck();
    if (bob==11||bob==7) {
      yourMoney = yourMoney+tottalAi;
      setText("yourM", "$"+yourMoney);
      tottalAi=0;
      yourtottal=0;
      change();
      Ai1();
    }
  }
  
  

});






function change() {
 if (player1 == 1){
  
  player1--;
  hideElement("label8");
  showElement("label7");
  }
  else{
  player1++;
  speed(100);
     hideElement("label7");
  showElement("label8");
  }
}

function dicerole(n1,n2) {
  one();
  if (n2==1) {
    setImageURL("image3", "download-(1).png");
    
  } else if (n2==2) {
    setImageURL("image3", "download-(3).png");
  } else if (n2==3) {
    setImageURL("image3", "assets/images.png");
  } else if (n2==4) {
    setImageURL("image3", "assets/Dice-4-b.svg.png");
  } else if (n2==5) {
    setImageURL("image3", "download-(4).png");
  } else if (n2==6) {
     setImageURL("image3", "download-(2).png");
  }
  
  if (dice1==1) {
    setImageURL("image2", "download-(1).png");
    
  } else if (n1==2) {
    setImageURL("image2", "download-(3).png");
  } else if (n1==3) {
    setImageURL("image2", "assets/images.png");
  } else if (n1==4) {
    setImageURL("image2", "assets/Dice-4-b.svg.png");
  } else if (n1==5) {
    setImageURL("image2", "download-(4).png");
  } else if (n1==6) {
     setImageURL("image2", "download-(2).png");
  }
}

function endcheck() {
  if (yourMoney<=1) {
    setScreen("screen4");
    
  }
  if (Ai<=1) {
    setScreen("screen5");
    
  }
  
  
}

function Ai1() {
  if (player1==0) {
 bet=getNumber("text_input1");
  hideElement("label8");
  showElement("label7");
  hideElement("image6");
  hideElement("lol2");
  hideElement("button4");
  
  
  fish= randomNumber(1,6);
  
  var dice5= randomNumber(1,6);
  var dice6= randomNumber(1,6);
  var bob3=dice5+dice6;
  
  console.log(bob3);
  
 
 showElement("image1");
 speed(75);
hideElement("image1");
speed(100);
  speed(95);
showElement("image6");
  Aibet= Ai*betArray[(randomNumber(0,8))];
  Ai=Ai-Aibet;
  dicerole(dice5,dice6);
  if (bob3==11||bob3==7) {
    Ai = Ai+tottalAi;
   setText("Rick", "His money $"+Ai);
    tottalAi=0;
    yourtottal=0;
    change();
    back();
  } else {
    tottalAi=tottalAi+Aibet;
    console.log(Ai);
    setText("Rick", "His Money $"+Ai);
    back();
  }

 
 
 
  showElement("lol2");
 setText("lol2", "$"+Aibet);
 dicerole(dice5,dice6);
 showElement("button3");
 endcheck();

 if (player1==0) {
    var dice7=randomNumber(1,6);
    var dice8=randomNumber(1,6);
    var bob4= dice7+dice8;
    
 
    console.log(bob4);
    dicerole(dice7,dice8);
    if (bob3==bob4) {
      
      Ai = Ai+tottalAi;
      
      
      
      tottalAi=0;
      setText("Rick", "$"+Ai);
      endcheck();
      change();
      
      
    } else {
      tottalAi=tottalAi+Aibet;
      endcheck();
       tottal();
      change();
      back();
    }
  } 
}
  back();
}

function back() {
  if (player1==1) {
    hideElement("image3");
     hideElement("image2");
   showElement("button4");
  }
  
  
}
function one() {
  showElement("image3");
   showElement("image2");
}

function tottal() {
  setText("total", "$"+tottalAi);
}
onEvent("button7", "click", function( ) {
  player1=1;
  hideElement("label7");
  showElement("label8");
  showElement("button4");
   yourMoney=500;
 Ai=500;
 tottalAi=0;
 hideElement("image2");
 hideElement("image3");
 setText("Rick", "$"+Ai);
 setText("yourM", "$"+yourMoney);
 setText("lol", "");
 setText("total", "");
 Aibet= Ai*betArray[randomNumber(0,8)];
 Aibet=Aibet;
 tottalAi=Math.round(Aibet);
 Ai=Ai-Aibet;
 setText("lol2", "$"+Aibet);
 setText("Rick", "His Money $"+Ai);
});
