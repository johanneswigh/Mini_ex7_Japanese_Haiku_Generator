let img;
let font;
let music;

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
}

function setup(){
  //line1 soundfiles
// oldpond = loadSound ('quotes/Line1/oldpond.wav', callback);
// thefirst = loadSound ('quotes/Line1/thefirst.wav', callback);
// thewind = loadSound ('quotes/Line1/thewind.wav', callback);
// fromtime = loadSound ('quotes/Line1/fromtime.wav', callback);
// blowingfrom = loadSound ('quotes/Line1/blowingfrom.wav', callback);
// ikill = loadSound ('quotes/Line1/ikill.wav', callback);
  //line2 soundfiles
// eventhe = loadSound ('quotes/Line2/eventhe.wav', callback);
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
  text(random (line1), width/2, 210);
//line 2 of haiko
  text(random (line2), width/2, 265);
//line 3 of haiko
  text(random (line3), width/2, 320);
}

// function callback(){
// //line1 sounds playing
// if (line1[0]){
//   oldpond.play();
//   oldpond.setVolume(0.1);
// }
//
// if (line1[1]){
//   thefirst.play();
//   thefirst.setVolume(0.1);
// }
//
// if (line1[2]){
//   thewind.play();
//   thewind.setVolume(0.1);
// }
//
//  if (line1[3]){
//   fromtime.play();
//   fromtime.setVolume(0.1);
// }
//
// if (line1[4]){
//  blowingfrom.play();
//  blowingfrom.setVolume(0.1);
// }
//
//  if (line1[5]){
//   ikill.play();
//   ikill.setVolume(0.1);
// }
// }
