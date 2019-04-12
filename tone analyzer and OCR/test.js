
const fs = require('fs');
const vision = require('@google-cloud/vision');
const shell  = require("shelljs");
const toneAnalyzer = require("watson-developer-cloud/tone-analyzer/v3");
const toneobj = require('./secret').t_analyser;
const client = new vision.ImageAnnotatorClient();



// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}



// var req = {
//   "requests": [
//     {
//       "image": {
//         "content": base64_encode('./index.png')
//       },
//       "features": [
//         {
//           "type": "TEXT_DETECTION"
//         }
//       ]
//     }
//   ]
// }
function analyze(text){
    return new Promise((resolve,reject)=>{

        var tone_analyzer = new toneAnalyzer(toneobj);

        var params = {
          'tone_input': text,
          'content_type': 'text/plain'
        };


        tone_analyzer.tone(params,(err,response)=>{
            if(err) reject(err);
            else resolve(JSON.stringify(response,null,2));
        });
    });


}




client
  .textDetection('./index.png')
  .then((results) => {
      //console.log(results);
    const detections = results[0].textAnnotations;
    var text = '';
    //console.log(detections);
    detections.forEach((datta) => {
        //console.log(JSON.stringify(text));
        text+=datta.description;

    });
    //console.log(text);
    analyze(text).then(data=>console.log(data)).catch(err=>console.log(err));

  })
  .catch(err => {
    console.log(err);
  });
