function writeUserData(name,pdf){
    firebase.database().ref('users/'+name).set({
        pdf
    });
}

function retreive(name){
    var pdfs = firebase.database().ref('users/'+name);
    pdfs.on('value',(pdf)=>{
        alert(JSON.stringify(pdf));
    });
}

window.onload = ()=>{
    writeUserData("a","PDFF");
    document.getElementById('header').addEventListener("click",()=>{
        firebase.database().ref().update("hagga");
        retreive("a");
    });
}
