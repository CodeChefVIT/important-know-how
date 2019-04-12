const request = require('request');
var fs = require('fs');

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

//console.log(base64_encode('testocr.png'));

var req = {
  "requests": [
    {
      "image": {
        "content": base64_encode('testocr.png')
      },
      "features": [
        {
          "type": "TEXT_DETECTION"
        }
      ]
    }
  ]
}



// request.post('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBXeRdQEdfypvqpSC7v1DSZgibQnVMPZsI',req,(err,response,data)=>{
//     if(err) console.log(err);
//     else console.log(response);
// });

const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

const fileName = __dirname + '/hi.png';

// Performs text detection on the local file
client
  .textDetection(fileName)
  .then(results => {
    const detections = results[0].textAnnotations;
    console.log('Text:');
    detections.forEach((text) => {

        //console.log(JSON.stringify(text));
        console.log(text.description);

    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
