var noseX = 0;
var noseY = 0;

//Funções P5

function preLoad() {
    nose = loadImage('nose.png')
}

function draw() {
    image(webcam, 0, 0, 500, 500)
    //circle( noseX, noseY, 40)
    //fill("red")
    image(nose, noseX, noseY,30,30)
}

function setup() {
    canvas = createCanvas(500, 500)
    canvas.center()
    webcam = createCapture(VIDEO)
    webcam.size(500, 500)
    webcam.hide()
    var poseNet = ml5.poseNet(webcam, modeLoaded)
    poseNet.on("pose", gotPoses)
}

function modeLoaded() {
    console.log("Modelo Carregado")
}

function gotPoses(results) {
    console.log("gotPoses")
    if (results.length > 0) {
        console.log(results)
        console.log("O valor de X = "+results[0].pose.nose.y)
        console.log("O valor de Y = "+results[0].pose.nose.x)
        noseX = +results[0].pose.nose.x
        noseY = +results[0].pose.nose.y
    }
}
