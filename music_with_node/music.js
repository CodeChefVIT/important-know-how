var player = require('play-sound')(opts = {});

// // $ mplayer foo.mp3
// var audio = player.play('Ashes.mp3', function(err){
//   if (err) throw err
// });
// audio.kill();



//Promise to play music
function play(sound){
    return new Promise((resolve,reject)=>{
        player.play(sound,(err)=>{
            if(err){
                console.log(err);
                reject(err);
            } else{
                resolve('playing');
            }
        });
    });
}






//generator to aid in playing an array of songs
function* playsongs(array){
    for(i of array){
        yield i;
    }
}



var array = ['makinmusic.mp3','Ashes.mp3'];

var nxt = playsongs(array);

var file = nxt.next().value;

//while(!nxt.done){

    play(file)
    .then(()=>{
        file = nxt.next().value;
        console.log("Now playing " + file);
    }).catch(err=>console.log(err));
//}
