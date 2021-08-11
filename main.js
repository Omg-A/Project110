Prediction_1 = "";
Prediction_2 = "";

Webcam.set({
    width:350,
    height:300,
    file_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });

}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JSZ8OKMzV/model.json', modelLoaded);

function modelLoaded(){
    console.log("The model has been loaded!!!");
}