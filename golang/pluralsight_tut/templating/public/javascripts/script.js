$(document).ready(()=>{
        //--------------------------------------------GLOBAL VARIABLES---------------------------
        var getJSON = [];
        var slotInit =[];
        var slotName=[];
        var counter=0;
        var dataJSON=[];
        var facID=1;
        var n;
        var extractfacID; //Change
        var state = true; //change2
        var removeslotFlag=0;
        var ced = 0;

        $(".lever").on("click",()=>{
          state = !state;
          updateFreshCourses();
        });

        //-----------------------------------------------------------------------------------------
        function addDataToList(s,c,t,v,f,cd,id_cell) //Updating selected courses table
        {

            var table = document.getElementById("sec_Course");
            var row=table.insertRow(1);
            row.id="row"+id_cell;//change
            var slot=row.insertCell(0);
            var code=row.insertCell(1);
            var title=row.insertCell(2);
            var ven=row.insertCell(3);
            var facl=row.insertCell(4);
            var cred=row.insertCell(5);
            var delt=row.insertCell(6);// CHANGE
            delt.id="id"+id_cell;//change
            var classN="close" ; //change

            slot.innerHTML=s;
            code.innerHTML=c;
            title.innerHTML=t;
            ven.innerHTML=v;
            facl.innerHTML=f;
            cred.innerHTML=cd;
            delt.innerHTML="<b/><i class=\"fas fa-times cross\"/></b/>"; //CHANGE
            $("#"+delt.id).addClass(classN);//CHANGE
        }

//---------------------------------------------------------------------------------- Baker


var temp="0";
var temp2="#0";
$(".slotLabel").on("click", function(){
    var innerHTMLElement= (this.id).toUpperCase();
    innerHTMLElement = innerHTMLElement.substr(1, innerHTMLElement.length);
    innerHTMLElement = "." + innerHTMLElement;
    console.log($(innerHTMLElement).hasClass("testSlot"), "for class", innerHTMLElement);
    if($(innerHTMLElement).hasClass("testSlot") == false) {
        $(temp).removeClass("testSlot");
        $(temp2).removeClass("textBold");
        console.log("Changing bold at",temp2);
        temp = innerHTMLElement;
        $(temp2.substr(0,1)+this.id).addClass("textBold"); //Extracting the # sign
        if($(innerHTMLElement).hasClass("TH")== false)
            $(innerHTMLElement).addClass("testSlot");
    }
    else{
        $(temp).removeClass("testSlot");
        $(temp2).removeClass("textBold");
    }
    temp2=temp2.substr(0,1)+(this.id); //Extracting th
});

// $('#sw1').on('click', function(){ //change2
//
//     if ($('#sw1').is(":checked"))
//     {
//         state="T";
//         console.log(state);
//     }
//     else {
//         state="L";
//         console.log(state);
//     }
//     updateFreshCourses();
// });



//---------------------------------------------------------------------------------- Baker ends




function extractSlot() {
                var flag=0;
                var length=dataJSON[facID]["SLOT"].length;
                var i=0;
                for(;i<length;i++) //Check if + sign is present which means there are more than 1 slots
                    if(dataJSON[facID]["SLOT"][i]=="+"){
                        flag=1; //Flag to 1 if more than 1 slot present
                        break;
                    }

                if (flag == 1) {
                    slotName[facID]=".";
                    slotName[facID] =slotName[facID] + dataJSON[facID]["SLOT"].substr(0, i); //Store the first part of the slot in slotName
                    dataJSON[facID]["SLOT"] =dataJSON[facID]["SLOT"].substr(i+1, length); //Store the later part of the slot in slot

                    changeSlotColor(slotName[facID], dataJSON[facID]["CODE"]); //Call function to change color

                    if(dataJSON[facID]["SLOT"].localeCompare("")!=0) // If slot has another part
                        extractSlot();

                }

                else {
                    slotName[facID]=".";
                    slotName[facID] = slotName[facID] + dataJSON[facID]["SLOT"]; // Copy slot to slotName and call fxn to change color
                    changeSlotColor(slotName[facID], dataJSON[facID]["CODE"]);
                    return;

                }
            }

            function changeSlotColor(s, code, flag02) {//Multiple changes
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




    //updateFreshCourses(); //Function to be called when JSON object is received. STATUS:200 @Angad?


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
  SLOTName=[];
    //------------------------------------------UPDATE TABLE-------------------------------------------//
    var count0=0;
    for(var l =0; l<n ;l++){  //Loop to update table
      // var data =dataJSON[l]["SLOT"]+"|"+dataJSON[l]["VENUE"]+"|"+dataJSON[l]["FACULTY"]+"|";
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




    var flag=0; // The next is being called 6 times, fixing bug forcefully

    $(".fac").click(function() {
        console.log("running", this.id, "with flag", flag);
        facID=(this.id); // or alert($(this).attr('id'));
        facID= parseInt(facID.substr(3,facID.length));
        updateFrontend ();
        console.log("runningIF", this.id);
        flag++;

    });
//
// //Remove courses   -------------------change-------------------------------------------------------------
$(document).on('click', '.close', function(){
  removeslotFlag=1;//pancake
  extractfacID=parseInt((this.id).substr(2,(this.id).length));
  $("#row"+extractfacID).remove();
  // ced=ced-parseInt(dataJSON[extractfacID]["CREDITS"]);
  // $("#creds").html('Total Credits: ' + ced);
  // $("#credits").html("<br><h4><b>" + ced + "</b></h4>CREDITS");

  //dataJSON[extractfacID]["SLOT"]=slotInit[extractfacID];
    facID=extractfacID;
    $.ajax({
        url:'/timetable/del',
        type:'DELETE',
        data:dataJSON[extractfacID],
        success:()=>{
            console.log("Successfully sent the delete request");
            //TODO can this work?
            // var target = slotInit[extractfacID].split('+');
            // for(i of target){
            //   changeSlotColor('.'+i,dataJSON[facID]['CODE']);
            // }
            location.reload();
        },
        error:()=>{
            console.log("Error sending delete AJAX request");
        }
    });
});

//-----------------------------------------End-----------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------------------------

    /*Function: updateFrontend()
    T-> Will be invoked when a subject is clicked
    */



        function updateFrontend(){
          facID--;
        console.log("SUPERMAN", facID);
        slotInit[facID]=dataJSON[facID]["SLOT"];


        $.post("/timetable/save",dataJSON[facID],(res)=>{

            if(res.status == "clashed"){
                alert("Slot(s) clashed! "+res.info+" Slot was clashed");
            } else if(res.status == "limit"){




                alert("You cannot register more than 27 credits! You can only register "+res.info+" more credits");
            } else{
                //alert("Updated! As of now you have "+res.info+" credits");
                ced = res.info;
                $("#creds").html('Total Credits: ' + res.info)
                $("#credits").html("<br><h4><b>"+res.info+"</b></h4>CREDITS")
                addDataToList(slotInit[facID], dataJSON[facID]["CODE"], dataJSON[facID]["TITLE"], dataJSON[facID]["VENUE"], dataJSON[facID]["FACULTY"] , dataJSON[facID]["CREDITS"],facID);
                slotName[facID]=".";
                extractSlot();
            }
        });


        //addDataToList(slotInit[facID], dataJSON[facID]["CODE"], dataJSON[facID]["TITLE"], dataJSON[facID]["VENUE"], dataJSON[facID]["FACULTY"] , dataJSON[facID]["CREDITS"]);
        // console.log(length);

        //slotName[facID]=".";

        //extractSlot();

        //Demo data feed
        // //type="TH";
        // changeSlotColor(".A1", "CSE1003");
        // changeSlotColor(".B1", "PHY1999");
        // changeSlotColor(".E2", "CHY1701");
        // changeSlotColor(".C2", "MAT2002");
        //Demo data feed end

        // console.log(slotName,"slotName");

    }//End of updateFrontend()

    $("#sb").on("click",(e)=>{
        e.preventDefault();

        $.post("/timetable",{CODE:$("#i1").val().toUpperCase()},(data)=>{
            dataJSON = data;
            updateFreshCourses();
        });
    });

    //to get stored data
    $.get("/timetable/fetch",(data)=>{

        dataJSON = data.data;
        ced = data.credits;
        $("#creds").html('Total Credits: ' + data.credits);
        $("#credits").html("<br><h4><b>"+data.credits+"</b></h4>CREDITS");

        //TODO define slotInit
        for(var j=0;j<dataJSON.length;j++){
            addDataToList(dataJSON[j]["SLOT"], dataJSON[j]["CODE"], dataJSON[j]["TITLE"], dataJSON[j]["VENUE"], dataJSON[j]["FACULTY"] , dataJSON[j]["CREDITS"], facID);
            extSlot(j);
        }
    });


    function extSlot(b) {
        var flag=0;
        var length=dataJSON[b]["SLOT"].length;
        var i=0;
        for(;i<length;i++) //Check if + sign is present which means there are more than 1 slots
            if(dataJSON[b]["SLOT"][i]=="+"){
                flag=1; //Flag to 1 if more than 1 slot present
                break;
            }

        if (flag == 1) {
            slotName[b]=".";
            slotName[b] =slotName[b] + dataJSON[b]["SLOT"].substr(0, i); //Store the first part of the slot in slotName
            dataJSON[b]["SLOT"] =dataJSON[b]["SLOT"].substr(i+1, length); //Store the later part of the slot in slot

            changeSlotColor(slotName[b], dataJSON[b]["CODE"]); //Call function to change color

            if(dataJSON[b]["SLOT"].localeCompare("")!=0) // If slot has another part
                extSlot(b);

        }

        else {
            slotName[b]=".";
            slotName[b] = slotName[b] + dataJSON[b]["SLOT"]; // Copy slot to slotName and call fxn to change color
            changeSlotColor(slotName[b], dataJSON[b]["CODE"]);
            return;

        }
    }



});
