video="";
status="";

function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture();
    video.hide();
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Estado: detectando objetos";
    document.getElementById("input").value;
    
}
function modelLoaded(){
    console.log("¡Modelo cargado!");
    status=true;
}
function draw(){
    image(video,0,0,350,350);
}