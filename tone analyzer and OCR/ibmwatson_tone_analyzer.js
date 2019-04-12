const toneAnalyzer = require("watson-developer-cloud/tone-analyzer/v3");

var tone_analyzer = new toneAnalyzer({
    username: "",
    password: "",
    version_date:'2017-09-21',
    headers: {
   'X-Watson-Learning-Opt-Out': 'true'
    }
});

var params = {
  'tone_input': "Beyond the furor in Hollywood, the memo Fllows's part (as Disney later maintained),\
  appears to have marked a critical turning o, more plausibly, whether it referred to the\
  point in Eisner's relationship with Kat\
  zenberg, coming as it did on the heels of percentage.\
  Katzenberg's recent successes and attendant\
  With the success of Little Mermaid and Pretty\
  worthless when it was granted, had soared in\
  that evidence suggests he wanted to fire his\
  longtime partner. During the same month the e. Little Mermaid seemed sure to join the\
  pantheon of Disney classics, which meant revenues\
  in perpetuity from home video, re-releases, and\
  merchandise tie-ins. If Eisner did, in fact, say he\
  wanted to fire Katzenberg, Wells surely would",
  'content_type': 'text/plain'
};


tone_analyzer.tone(params,(err,response)=>{
    if(err) console.log(err);
    else console.log(JSON.stringify(response,null,2));
});
