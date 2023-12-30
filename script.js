var parentDiv = document.createElement("div");
parentDiv.className = "mainDiv";

var dob = document.createElement("input");
dob.setAttribute("type","date");
dob.id = "dob";

var button = document.createElement("button");
button.className = "btn btn-primary";
button.innerHTML = "Click Me";
button.addEventListener("click",dateManipulation);

parentDiv.append(dob,button);

var childDiv = document.createElement("div");
childDiv.className = "mainDiv";

var p1 = createParagraph("inputDate","childDiv");
var p2 = createParagraph("year","childDiv");
var p3 = createParagraph("month","childDiv");
var p4 = createParagraph("day","childDiv");
var p5 = createParagraph("hour","childDiv");
var p6 = createParagraph("minute","childDiv");
var p7 = createParagraph("second","childDiv");
var p8 = createParagraph("miilisecond","childDiv");

childDiv.append(p1,p2,p3,p4,p5,p6,p7,p8);

document.body.append(parentDiv,childDiv);

function dateManipulation(){
    var input = document.getElementById("dob").value;
    var time_stamp = Date.parse(input)
    if(time_stamp){
        var inputdate = new Date(time_stamp);
        var currentdate = new Date();   
        console.log(inputdate);
        console.log(currentdate);
        var millisecDiff = parseInt(currentdate.getTime()-inputdate.getTime());
        console.log(millisecDiff);
        var secondsdiff = mathfloor(millisecDiff,1000);
        console.log(secondsdiff);
        var minutsdiff = mathfloor(secondsdiff,60);
        console.log(minutsdiff);
        var hoursdiff = mathfloor(minutsdiff,60);
        console.log(hoursdiff);
        var daydiff = mathfloor(hoursdiff,24);
        console.log(daydiff);
        var yeardiff = year_diff(inputdate,currentdate);
        console.log(yeardiff);
        var monthdiff = month_diff(inputdate,currentdate);
        console.log(monthdiff);

        var p1 = document.getElementById("inputDate");
        p1.innerHTML = "Given Input Data " +inputdate;

        var p2 = document.getElementById("year");
        p2.innerHTML = "Year " +yeardiff;

        var p3 = document.getElementById("month");
        p3.innerHTML =  "Month " +monthdiff;

        var p4 = document.getElementById("day");
        p4.innerHTML = "Day " +daydiff;

        var p5 = document.getElementById("hour");
        p5.innerHTML = "Hour " +hoursdiff;

        var p6 = document.getElementById("minute");
        p6.innerHTML = "Minute " +minutsdiff;

        var p7 = document.getElementById("second");
        p7.innerHTML = "Second " +secondsdiff;

        var p8 = document.getElementById("miilisecond");
        p8.innerHTML = "Miilisecond " +millisecDiff;
    
        
    }

}

function createParagraph(id,className){
    var p = document.createElement("p");
    p.id = id;
    p.className = className;
    return p;
}


function mathfloor(value1,value2){
    return Math.floor(value1/value2);
    }
    
    function year_diff(value1,value2){
        var date1 = new Date(value1);
        var date2 = new Date(value2);
        return date2.getFullYear()-date1.getFullYear();
    }
    
    function month_diff(value1,value2){
        var year = year_diff(value1,value2);
        var month = (year*12)+(value2.getMonth()-value1.getMonth())
        return month
    }
