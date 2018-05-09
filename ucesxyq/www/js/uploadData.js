var client;


function startDataUpload() {
alert ("start data upload");
var clientid = document.getElementById("clientid").value;
var surname = document.getElementById("surname").value;
var module = document.getElementById("module").value;
alert(clientid + " "+ surname + " "+module);
var postString = "clientid="+clientid +"&surname="+surname+"&module="+module; 

// now get the radio button values
if (document.getElementById("answer1").checked) {
postString=postString+"&correctanswer=1";
}
if (document.getElementById("answer2").checked) {
postString=postString+"&correctanswer=2";
}


// now get the select box values
var language = document.getElementById("languageselectbox").value;
postString = postString + "&language="+language;

// now get the checkbox values - separate them with a | so that they can be split later on if necessary
var checkString = "";
for (var i = 1;i< 5;i++){
if (document.getElementById("check"+i).checked === true) {
checkString = checkString +
document.getElementById("check"+i).value + "||"
}
}
postString = postString + "&modulelist="+checkString;

// now get the geometry values
var latitude = document.getElementById("latitude").value;
var longitude = document.getElementById("longitude").value;
postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;

processData(postString);}

function processData(postString) {
client = new XMLHttpRequest();
client.open('POST','http://developer.cege.ucl.ac.uk:30272/uploadData',true);
client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
client.onreadystatechange = dataUploaded;
client.send(postString);

}
// create the code to wait for the response from the data server, and process the response once it is received

function dataUploaded() {
// this function listens out for the server to say that the data is ready - i.e. has state 4
if (client.readyState == 4) {
// change the DIV to show the response
document.getElementById("dataUploadResult").innerHTML = client.responseText;
}
}