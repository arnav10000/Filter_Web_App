function preload(){
}

function setup(){
    canvas = createCanvas(350, 300);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();
}

function draw(){
    image(video, 0, 0, 350, 300);
}

function take_snapshot(){
    save('myFilterImage.png');
}