var client;


function startDataUpload() {
alert ("start data upload");
var name = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var module = document.getElementById("module").value;
alert(name + " "+ surname + " "+module);
var postString = "name="+name +"&surname="+surname+"&module="+module; 
processData(postString);
}

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