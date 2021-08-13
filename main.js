prediction = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
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

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;

        prediction = results[0].label;

        if(results[0].label == "Best"){
            document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
        if(results[0].label == "Victory"){
            document.getElementById("update_gesture").innerHTML = "&#9996;";
        }
        if(results[0].label == "Amazing"){
            document.getElementById("update_gesture").innerHTML = "&#128076;";
        }
    }
}