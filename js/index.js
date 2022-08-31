console.log("YOU ARE CONNECTED!!");

function mainFunction(){
    averageScore();
    getPassedGrade();
    getFailedGrade();
}

// function displayStudentName(){
//     var sName = document.getElementById("sName").value;

//     document.getElementById("displayName").innerHTML
//     "Your Name:" + sName.toString();
// }

var arrGrade=[];
var arrSubject = ["Programming", "Networking", "Data Structure", "Digital Circuits", "Web Application", "Mobile Application", "Information Security", "DBMS"];

function averageScore(){
    var programming = parseFloat(document.getElementById("firstSub").value);
    var networking = parseFloat(document.getElementById("secondSub").value);
    var dataStructure = parseFloat(document.getElementById("thirdSub").value);
    var digitalCicuits = parseFloat(document.getElementById("fourthSub").value);
    var webApplication = parseFloat(document.getElementById("fifthSub").value);
    var mobileApplication = parseFloat(document.getElementById("sixthSub").value);
    var informationSecurity = parseFloat(document.getElementById("seventhSub").value);
    var dbms = parseFloat(document.getElementById("eightSub").value);

    var average = [programming + networking + dataStructure + digitalCicuits + webApplication + mobileApplication + informationSecurity]; 
    console.log(average);

    arrGrade.push(programming, networking, dataStructure, digitalCicuits, webApplication, mobileApplication, informationSecurity, dbms);
    console.log(arrGrade);

    if(average <=68){
        console.log("RETAKE / FAILED!");
    }

    else if(average >=69 && average <=74){
        console.log("REMEDIAL!");
    }

    else if(average >=75 && average<100){
        console.log("PASSED!");
    }

    else if(average <=50 && average >100){
        console.log("INVALID!");
    }
}

function getFailedGrade(){
    for(var a=0; a<arrGrade.length; a++){
        if(arrGrade[a] < 75){
            console.log("FAILED SUBJECTS: ", arrSubject[a], arrGrade[a]);
        }
    }
}

function getPassedGrade(){
    for(var a=0; a<arrGrade.length; a++){
        if(arrGrade[a]>=75){
            console.log("PASSED SUBJECTS: ");
        }
    }
}