let img;
let font;
let music;

var line1Rand;
var line2Rand;
var line3Rand;

//Creating the arrays of text. In a Haiku, there is
//three lines of poetry. The arrays are split in three,
//according to the lines. Each is a famous Haiku poem.
let line1 =["Old pond", "The first cold shower", "The wind of Fuji", "From time to time", "Blowing from the west", "I kill an ant",];
let line2 =["Frog leaps in", "Even the monkey seems to want", "I've brought on my fan", "The clouds give rest", "Falling leaves gather", "I realize my three children"];
let line3 =["Water's sound","A little coat of straw","A gift from Edo","To the moon-beholders","In the east","Have been wathching"];


function preload (){

//Loading in the background image,
//the font we use, and the music
  img = loadImage ('assets/japan2.jpg');
  font = loadFont('assets/font.ttf');
  music = loadSound ('assets/Flower.mp3');
  //line1 soundfiles
 oldpond = loadSound ('quotes/Line1/oldpond.wav');
 thefirst = loadSound ('quotes/Line1/thefirst.wav');
 thewind = loadSound ('quotes/Line1/thewind.wav');
 fromtime = loadSound ('quotes/Line1/fromtime.wav');
 blowingfrom = loadSound ('quotes/Line1/blowingfrom.wav');
 ikill = loadSound ('quotes/Line1/ikill.wav');
  //line2 soundfiles
 eventhe = loadSound ('quotes/Line2/eventhe.wav');
}

function setup(){

   createCanvas (1000, 667);
   background (img);

  music.play();
  //noLoop();
  frameRate (0.1);
}

function draw(){
background (img);
translate (width/2);
textAlign(CENTER);
textFont(font);
textSize (70);
fill (0);

//line 1 of haiko
line1Rand = random (line1);
text(line1Rand, width/2, 210);
//line 2 of haiko
line2Rand = random (line2);
text(line2Rand, width/2, 265);
//line 3 of haiko
line3Rand = random (line3);
text(line3Rand, width/2, 320);

callback();

oldpond.addCue(oldpond.duration()-0.01, callback2,line2Rand);
thefirst.addCue(thefirst.duration()-0.01, callback2,line2Rand);
thewind.addCue(thewind.duration()-0.01, callback2,line2Rand);
fromtime.addCue(fromtime.duration()-0.01, callback2,line2Rand);
blowingfrom.addCue(blowingfrom.duration()-0.01, callback2,line2Rand);
ikill.addCue(ikill.duration()-0.01, callback2,line2Rand);
}

 function callback(){
// //line1 sounds playing
 if (line1[0]== line1Rand){
   oldpond.play();
   oldpond.setVolume(0.1);
 }

 if (line1[1]== line1Rand){
  thefirst.play();
  thefirst.setVolume(0.1);
}

if (line1[2]== line1Rand){
  thewind.play();
  thewind.setVolume(0.1);
}

 if (line1[3]== line1Rand){
  fromtime.play();
  fromtime.setVolume(0.1);
}

if (line1[4]== line1Rand){
 blowingfrom.play();
 blowingfrom.setVolume(0.1);
}

 if (line1[5]== line1Rand){
  ikill.play();
  ikill.setVolume(0.1);
}
}

function callback2() {
  if (line2[1]== line2Rand) {
    eventhe.play();
    eventhe.setVolume(0.1);
  }
}
