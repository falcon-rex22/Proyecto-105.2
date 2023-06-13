Webcam.attach("#camera");

camera = document.getElementById("camera");
Webcam.set({
    width:300,
    height:300,
    image_formate:"png",
    png_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("Fotito").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5_version:", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JeLWSpIfY/model.json", modelo_cargado);

function modelo_cargado(){
    console.log("modelo cargado");
}

function check()
  {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }

function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  
  else {
    console.log(results);
    document.getElementById("Fotito").innerHTML = results[0].label;
    document.getElementById("Fotin").innerHTML = results[0].confidence.toFixed(3);
    }
}