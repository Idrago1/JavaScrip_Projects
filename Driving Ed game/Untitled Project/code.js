var imageDrive = getColumn("Diving", "image");
var MainEvent = getColumn("Diving", "evnet");
var gEvent = getColumn("Diving", "goodsolution");
var bEvent1 = getColumn("Diving", "badevent");
var discrip = getColumn("Diving", "discritiopn");
var problem = getColumn("Diving", "problem");
var bEvent2 = getColumn("Diving", "bad2");
var bEvent3 = getColumn("Diving", "bad3");
var storyI = getColumn("DrivingStory", "StoryImage");
var storyT = getColumn("DrivingStory", "Driving");
var  storyS= getColumn("DrivingStory", "DrivingSum");
var storychose1 = getColumn("DrivingStory", "Chose1");
var storychose2 = getColumn("DrivingStory", "Chose2");



var Fname = "";
var badCount = 0; 
var Lname = "";
var IDnumber = ""; 

var order = [[4,3,1,2],[1,3,4,2],[2,3,1,4],[3,2,1,4]];
var anser = levelsetter();
var points = 0;

setScreen("screen2");
onEvent("button5", "click", function( ) {
  Fname = getText("text_input1");
  Lname = getText("text_input2");
  IDnumber = getText("text_input3");
  Strorystuff();
 
  
});
onEvent("button1", "click", function( ) {
  ifThings(1);
  Strorystuff();
});

onEvent("button2", "click", function( ) {
    ifThings(2);
    Strorystuff();

});
onEvent("button3", "click", function( ) {
  ifThings(3);
  Strorystuff();
});
onEvent("button4", "click", function( ) {
  ifThings(4);
  Strorystuff();
});
onEvent("button6", "click", function( ) {
  setScreen("screen1");
});
onEvent("button7", "click", function( ) {
  setScreen("screen1");
  

});





function levelsetter() {

     
   
  var level = randomNumber(0, imageDrive.length-1);
  var ranN = randomNumber(0, order.length-1);
  setProperty("image1", "image", imageDrive[level]);
  setProperty("event", "text", MainEvent[level]);
  setProperty("sich", "text", discrip[level]);
  setProperty("optiopn", "text", problem[level]);
 setProperty("button"+order[ranN][0], "text", gEvent[level]);
 setProperty("button"+order[ranN][1], "text", bEvent1[level]);
 setProperty("button"+order[ranN][2], "text", bEvent2[level]);
 setProperty("button"+order[ranN][3], "text", bEvent3[level]);


var fish = order[ranN][0];
  console.log(fish);
  anser = fish;

return fish;
}
function ifThings(n){
  if (n==anser) {
    levelsetter();
    points++;
    console.log("Points: "+points);
    setScreen("screen3");

  }else{
    console.log("wrong");
    badCount++;
    levelsetter();
   
  }
  
  setScreen("screen3");
}

function Strorystuff() {
  setScreen("screen3");
  var stroyRanNum = randomNumber(0, storyI.length -1 );
  setProperty("image2", "image",storyI[stroyRanNum] );
  setProperty("story", "text", storyS[stroyRanNum]);
  setProperty("button6", "text", storychose1[stroyRanNum]);
  setProperty("button7", "text", storychose2[stroyRanNum]);
  setProperty("storyTitle", "text", storyT[stroyRanNum]);

}


