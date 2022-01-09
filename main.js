song_1=" ";
song_2=" ";

function preload() {
    song_1=loadSound("music.mp3"); 
    song_2=loadSound("music2.mp3");
}

function setup() {
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    model_posenet=ml5.poseNet(video,model_loaded);
  model_posenet.on("pose",gotresults);
}

function draw() {
    image(video,0,0,500,500);
}

function play() {
    song_1.play();
    song_1.setVolume(1);
    song_1.rate(1);
}