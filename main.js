function preload(){

}

function setup(){
canvas = createCanvas(500,400)

video = createCapture(VIDEO)
    video.hide();

}

function draw(){
    image(video,0,0,500,400);
}

function take_snapshot(){
    save('image.jpg')
}

function boy(){
    document.getElementById('boy').style = 'background-color:red;'
    document.getElementById('girl').style = 'background-color:blue;'

}

function girl(){
    document.getElementById('girl').style = 'background-color:red;'
    document.getElementById('boy').style = 'background-color:blue;'
}