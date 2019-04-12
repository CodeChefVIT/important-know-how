


//--------------------------------------------GLOBAL VARIABLES---------------------------
var slotInit =[];
var slotName=[];
var counter=0;
var dataJSON=[];
var facID;
var n;
var extractfacID; //Change
var state = "L";
var noSignUPsubCounter=0;
var clashStatus=0;
var removeslotFlag=0;
var arraySubject = [];
var length;
var ced;
arraySubject =[];
var facIDReplace;
var state = true; //change2
function changeslotColor(s, code, flag02) {//Multiple changes
console.log(s);
    console.log("BURBERRY runs");
    var slotI = s.substr(1, s.length);
    // console.log("Pancake runs changeslotColor");
    if (removeslotFlag == 1) {
        // console.log("Strawberry runs if", $(s).hasClass("TH") == true);
        if ($(s).hasClass("TH") == true)//Change
        {
            // console.log("Pancake tries removing", s);
            $(s).removeClass("TH");
            // console.log("Removing class and changing html element to",s);
            $(s).html(slotI);

        }
        else { //strawberry

            // console.log("Strawberry runs else");
            $(s).addClass("TH");//Change
            $(s).html(code + "-" + '<br/>' + slotI);
        }
    }
    else {
        // console.log("Strawberry runs else");
        $(s).addClass("TH");//Change
        $(s).html(code + "-" + '<br/>' + slotI);
    }

}


$(".lever").on("click",()=>{
  state = !state;
  updateFreshCourses();
});
// console.log("STATE1:", arraySubject, "and", dataJSON);
//-----------------------------------------------------------------------------------------
updateFreshCourses(); //Function to be called when JSON object is received. STATUS:200 @Angad?



// to check if given string i json or not
function isJSON(str){
  try{
    JSON.parse(str);
  }
  catch(e){
    return false;
  }
  return true;
}



    $("#sb").on("click",(e)=>{
        e.preventDefault();

        $.post("/nosignup/timetable",{CODE:$("#i1").val().toUpperCase()},(data)=>{
            dataJSON = data;
            updateFreshCourses();
        });
    });





        function updateFreshCourses(){

        console.log("updateFreshCourses() running");

        if(isJSON(dataJSON))
          dataJSON = JSON.parse(dataJSON);
        //LET US ASSUME THAT THE FACULTY LIST IS STORED IN A ARRAY  OF DICTIONARY IN javascript
        //@Angad JSON store the JSON data into this dictionary array.
        //Extract it from the object and store it in dataJSON
        counter=0;
      n=dataJSON.length;

      slotInit =[];
      //Pancake
          for(var l3=0;l3<n;l3++)
              slotInit[l3]=dataJSON[l3]["SLOT"];
      slotName=[];
        //------------------------------------------UPDATE TABLE-------------------------------------------//
        var count0=0;
        for(var l =0; l<n ;l++){  //Loop to update table
          // var data =dataJSON[l]["slot"]+"|"+dataJSON[l]["VENUE"]+"|"+dataJSON[l]["FACULTY"]+"|";
          // if (data.length >=23)
          //     $("#fac"+(l+1)).html(data.substr(0,23)+ data.substr(23, data.length)+'<hr/>');
          // else
          //     $("#fac"+(l+1)).html(data+'<hr/>');

          var data = dataJSON[l]["SLOT"] + "|" + dataJSON[l]["VENUE"] + "|" + dataJSON[l]["FACULTY"] + "|";
          if(state) //Superman
          {
              if(dataJSON[l]["SLOT"][0]=='L'){
                if (data.length >= 14)
                    $("#fac" + (counter + 1)).html(data.substr(0, 14) + data.substr(14, data.length) + '<hr/>');
                else
                    $("#fac" + (counter + 1)).html(data + '<hr/>');
              counter++;
              }
          }
          else {
            if(dataJSON[l]["SLOT"][0]!='L'){
              if (data.length >= 14)
                  $("#fac" + (count0 + 1)).html(data.substr(0, 14) + data.substr(14, data.length) + '<hr/>');
              else
                  $("#fac" + (count0 + 1)).html(data + '<hr/>');
              count0++;
            }
          }
        }//Table updated with course options



        }//End of updateFreshCourses()


//----------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------- Baker


var temp="0";
var temp2="#0";
$(".slotLabel").on("click", function(){
    var innerHTMLElement= (this.id).toUpperCase();
    innerHTMLElement = innerHTMLElement.substr(1, innerHTMLElement.length);
    innerHTMLElement = "." + innerHTMLElement; //Extracting class
    // console.log($(innerHTMLElement).hasClass("testslot"), "for class", innerHTMLElement);
    if($(innerHTMLElement).hasClass("testSlot") == false) {
        $(temp).removeClass("testSlot");
        $(temp2).removeClass("textBold");
        temp = innerHTMLElement;
        $(temp2.substr(0,1)+this.id).addClass("textBold"); //Extracting the # sign
        if($(innerHTMLElement).hasClass("TH")== false)
        {
            $(innerHTMLElement).addClass("testSlot");}
    }
    else{
        $(temp).removeClass("testSlot");
        $(temp2).removeClass("textBold");
    }
    temp2=temp2.substr(0,1)+(this.id); //Extracting th
});



//---------------------------------------------------------------------------------- Baker ends



var flag=0;

$(".fac").click(function() {

    facID=(this.id); // or alert($(this).attr('id'));
    facID= parseInt(facID.substr(3,facID.length));
    // console.log("id clicked",facID); //superman

    var html_cont = document.getElementById(this.id).innerHTML;
    html_cont=html_cont+"|";
    // console.log("HTML content", html_cont);
    var slot, ven,fac0,i0,i1;
    for(i0=0;i0<html_cont.length;i0++) //Extract slot
    {
        if(html_cont[i0].localeCompare("|")==0)
            break;
    }
    slot=html_cont.substr(0,i0);
    for(i1=i0+1;i1<html_cont.length;i1++) //Extract slot
    {
        if(html_cont[i1].localeCompare("|")==0) {
            // console.log("breaking at", html_cont[i1]);
            break;
        }
    }
    ven=html_cont.substring(i0+1,i1);
    // console.log("VENUE", ven," from",i0+1," to ", i1);
    // console.log("ven", ven , "start at:",html_cont[i0+1],"ending at", html_cont[i1], "cotent being", html_cont);
    for(i0=i1+1;i0<html_cont.length;i0++) //Extract slot
    {
        if(html_cont[i0].localeCompare("|")==0) {
            break;
        }
    }
    fac0=html_cont.substring(i1+1,i0);
    // console.log("slot", slot, "code", ven, " FACULTY", fac0);

    facIDReplace=-1;
    // console.log("Pancake prints n", n);
    for(var findC=0; findC<n; findC++)
    {
        // console.log("to be compared with", slotInit[findC]);
        // console.log("slot, VENUE, fac", dataJSON[findC]["slot"]);
        if(slotInit[findC].localeCompare(slot)==0 && dataJSON[findC]["VENUE"].localeCompare(ven)==0 && dataJSON[findC]["FACULTY"].localeCompare(fac0)==0) {
            facIDReplace = findC;
            break;
        }
    }
    // console.log("Tracked ID:", facIDReplace);
    facID=facIDReplace;
    var slotClash=0;
    var slotCompare=[];
    var toBeComparedWith =[];
    function DummyExtractslot(slotDummy){
        var k=0;
        var l5;
        for(l5=0;l5<slotDummy.length; l5++)
        {
            if(slotDummy[l5].localeCompare("+")==0)
            {
                toBeComparedWith[k]=slotDummy.substring(0,l5);
                slotDummy=slotDummy.substring(l5+1, slotDummy.length);
                l5=0;
                k++;
            }
        }
        toBeComparedWith[k]=slotDummy.substring(0,l5);
    }
    function ExtractslotForIncomingCourse(slotDummy){
        var k=0;
        var l5;
        for(l5=0;l5<slotDummy.length; l5++)
        {
            if(slotDummy[l5].localeCompare("+")==0)
            {
                slotCompare[k]=slotDummy.substring(0,l5);
                slotDummy=slotDummy.substring(l5+1, slotDummy.length);
                l5=0;
                k++;
            }
        }
        slotCompare[k]=slotDummy.substring(0,l5);
    }
    ExtractslotForIncomingCourse(slotInit[facID]);
    for(var l6=0;l6<noSignUPsubCounter;l6++)//Check whether any slots clashed or not
    {

        DummyExtractslot(arraySubject[l6]["SLOT"]);
        for(var l7=0; l7<slotCompare.length;l7++)
        {
            for(var l6=0; l6<toBeComparedWith.length;l6++)
            {
                if(slotCompare[l7].localeCompare(toBeComparedWith[l6])==0){
                    slotClash=1;
                    break;
                }
            }
            if(slotClash==1)
                break;
        }
        if(slotClash==1)
            break;
    }
    if(slotClash==1)
    {
        alert("slot(s) clashed");

        slotClash =0;
        return;
    }
    arraySubject[noSignUPsubCounter] = {
        "SLOT": slotInit[facID],
        "CODE": dataJSON[facID]["CODE"],
        "TITLE": dataJSON[facID]["TITLE"],
        "VENUE": dataJSON[facID]["VENUE"],
        "FACULTY": dataJSON[facID]["FACULTY"],
        "CREDITS": dataJSON[facID]["CREDITS"]
    };
    noSignUPsubCounter++;


    updateFrontend (0);
    flag++;

});


//--------------------------------------------------------------------------------------------------------------------------
//Remove courses   -------------------change-------------------------------------------------------------


$(document).on('click', '.close', function(){
    // console.log('pancake');
    removeslotFlag=1;//pancake
    extractfacID=parseInt((this.id).substr(2,(this.id).length));
    $("#row"+extractfacID).remove();
    dataJSON[extractfacID]["SLOT"]=slotInit[extractfacID];
    facID=extractfacID;
    ced=ced- parseInt(dataJSON[facID]["CREDITS"]);
    $("#creds").html('Total Credits: ' + ced);
    $("#credits").html("<br><h4><b>" + ced + "</b></h4>CREDITS");

    for(var l6=0;l6<arraySubject.length; l6++)
    {
        if(!arraySubject[l6]["SLOT"]){
          console.log("Undefined");
        }
        else if(arraySubject[l6]["SLOT"].localeCompare(slotInit[facID])== 0  && arraySubject[l6]["FACULTY"].localeCompare(dataJSON[facID]["FACULTY"])== 0)
        {

            for(var l7=l6;l7<arraySubject.length-1;l7++)
            {

                arraySubject[l7] = {
                    "SLOT": arraySubject[l7+1]["SLOT"],
                    "CODE": arraySubject[l7+1]["CODE"],
                    "VENUE": arraySubject[l7+1]["TITLE"],
                    "FACULTY": arraySubject[l7+1]["FACULTY"],
                    "CREDITS": arraySubject[l7+1]["CREDITS"]
                };
            }
            arraySubject[l7] = {
                "SLOT": NaN,
                "CODE": NaN,
                "VENUE": NaN,
                "FACULTY": NaN,
                "CREDITS": NaN
            };
            noSignUPsubCounter--;
            break;
        }
    }
    updateFrontend(1);
});
//-----------------------------------------End-----------------------------------------------------------






/*Function: updateFrontend()
T-> Will be invoked when a subject is clicked
*/


function updateFrontend(flag02) {
    length = slotInit[facID].length;

    if (flag02 == 0) {   // Replaced 2x changes

        slotName[facID] = ".";
        dataJSON[facID]["SLOT"]=slotInit[facID];
        extractslot();
        // console.log("Strawberry runs extractslot() 1");

        if (clashStatus == 1) {
            clashStatus = 0;
        }
        else {
            clashStatus = 0;
            ced = 0;
            for (var l2 = 0; l2 < noSignUPsubCounter; l2++)
                ced += parseInt(arraySubject[l2]["CREDITS"]);

            $("#creds").html('Total Credits: ' + ced);
            $("#credits").html("<br><h4><b>" + ced + "</b></h4>CREDITS");

            addDataToList(slotInit[facID], dataJSON[facID]["CODE"], dataJSON[facID]["TITLE"], dataJSON[facID]["VENUE"], dataJSON[facID]["FACULTY"], dataJSON[facID]["CREDITS"], facID);

        }
    }
    else{
        extractslot();
        // console.log("Strawberry runs extractslot() 2");
    }

    function extractslot() {
        var flag = 0;

        var i = 0;
        for (; i < length; i++) //Check if + sign is present which means there are more than 1 slots
            if (dataJSON[facID]["SLOT"][i] == "+") {
                flag = 1; //Flag to 1 if more than 1 slot present
                break;
            }
        if (flag == 1) {

            // console.log("CHECKPOINT is ", slotInit[facID]);
            slotName[facID] = ".";
            slotName[facID] = slotName[facID] + dataJSON[facID]["SLOT"].substr(0, i); //Store the first part of the SLOT in slotName
            dataJSON[facID]["SLOT"] = dataJSON[facID]["SLOT"].substr(i + 1, length); //Store the later part of the SLOT in SLOT
            // console.log("{ancake tests value of if",($(slotName[facID]).hasClass("TH") == true  && removeslotFlag==0));
            if ($(slotName[facID]).hasClass("TH") == true   && removeslotFlag==0) {
                alert("SLOTS CLASHED"); //If slots clashed then dont change color
                clashStatus = 1;
                return;
            }
            else if($(slotName[facID]).hasClass("TH") == true && removeslotFlag==1)
            {
                changeslotColor(slotName[facID], dataJSON[facID]["CODE"]); //Call function to change color

            }
            else {
                changeslotColor(slotName[facID], dataJSON[facID]["CODE"]); //Call function to change color
            }

            if (dataJSON[facID]["SLOT"].localeCompare("") != 0) // If SLOT has another part
            {
                extractslot();
                length = dataJSON[facID]["SLOT"].length;
            }
        }

        else {
            slotName[facID] = ".";
            slotName[facID] = slotName[facID] + dataJSON[facID]["SLOT"]; // Copy SLOT to slotName and call fxn to change color
            if ($(slotName[facID]).hasClass("TH") == true && removeslotFlag==0) {
                alert("SLOTS CLASHED"); //If slots clashed then dont change color
                clashStatus = 1;
                return;
            }
            else {
                changeslotColor(slotName[facID], dataJSON[facID]["CODE"]);
            }

            return;

        }
    }



    function addDataToList(s, c, t, v, f, cd, id_cell) //Updating selected courses table
    {
        // console.log("should read empty", arraySubject);
        // for(var l4=0; l4<arraySubject.length; l4++){
        //     if(arraySubject[l4]["SLOT"].localeCompare(slotInit[facID])== 0  || arraySubject[l4]["FACULTY"].localeCompare(dataJSON[facID]["FACULTY"])== 0){
        //         alert("SLOT BOOM");
        //         return;
        //     }
        //
        //  }


        var table = document.getElementById("sec_Course");
        var row = table.insertRow(1);
        row.id = "row" + id_cell;//change
        var slot = row.insertCell(0);
        var code = row.insertCell(1);
        var title = row.insertCell(2);
        var ven = row.insertCell(3);
        var facl = row.insertCell(4);
        var cred = row.insertCell(5);
        var delt = row.insertCell(6);// CHANGE
        delt.id = "id" + id_cell;//change
        var classN = "close"; //change

        slot.innerHTML = s;
        code.innerHTML = c;
        title.innerHTML = t;
        ven.innerHTML = v;
        facl.innerHTML = f;
        cred.innerHTML = cd;
        delt.innerHTML = "<b/><i class=\"fas fa-times cross\"/></b/>"; //CHANGE
        $("#" + delt.id).addClass(classN);//CHANGE

    };
}

//
// }//End of updateFrontend()
