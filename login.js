var allInput=document.querySelectorAll("input")
var allselectTag=document.querySelectorAll("select")
var userGen;
function storeTheValue()
{
    var firstName=allInput[0].value
    var surName=allInput[1].value
    var emailOrMobile=allInput[2].value
    var pass=allInput[3].value
    var date=allselectTag[0].value
    var month=allselectTag[1].value
    var year=allselectTag[2].value
    localStorage.setItem("Fname",firstName);
    localStorage.setItem("Sname",surName);
    localStorage.setItem("E&M",emailOrMobile);
    localStorage.setItem("pass",pass);
    localStorage.setItem("dd",date);
    localStorage.setItem("mm",month);
    localStorage.setItem("yy",year);
    sessionStorage.setItem("E&M",emailOrMobile);
    sessionStorage.setItem("pass",pass);
    console.log("login sucessfull");

}
function gender(gen)
{
    userGen=gen
}


var emailOrPhno=sessionStorage.getItem("E&M");
var pass=sessionStorage.getItem("pass");
var inputTags=document.getElementsByClassName("inputTag");

function loginFun()
{
    var userGivenID=inputTags[0].value
    var userGivenPass=inputTags[1].value
    var formTag=document.forms
    if(userGivenID==emailOrPhno && userGivenPass==pass)
    {
        document.getElementById("loginButton").type="Submit"
        formTag[0].action="./Home.html"
    }
    else if(userGivenID!=emailOrPhno && userGivenPass==pass)
    {
        document.getElementById("status").innerHTML="Wrong UserId"
        document.getElementById("emailDiv").style.borderColor="red"
        document.getElementById("passDiv").style.borderColor="royalblue"

        document.body.style.backgroundImage="linear-gradient(75deg,red,#FBB03B)"
    }
    else if(userGivenID==emailOrPhno && userGivenPass!=pass)
    {
        document.getElementById("status").innerHTML="Wrong Password"
        document.getElementById("passDiv").style.borderColor="red"
        document.getElementById("emailDiv").style.borderColor="royalblue"

        document.body.style.backgroundImage="linear-gradient(75deg,#D4145A,red)"
    }
    else{
        document.getElementById("status").innerHTML="Wrong UserId and Password"
        document.getElementById("emailDiv").style.borderColor="red"
        document.getElementById("passDiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
  
    }
}
function visiblepassword()
{
    inputTags[1].type="text"
    document.getElementById("visibleLogo").src="./visible (1).jpg"
    document.getElementById("visibleLogo").style.transform="rotateY(180deg)"
    document.getElementById("visibleLogo").style.transition="transform 0.2s"

}
function invisiblepassword()
{
    inputTags[1].type="password"
    document.getElementById("visibleLogo").src="./closeeye.jpg"
    document.getElementById("visibleLogo").style.transform="rotateY(0deg)"
    document.getElementById("visibleLogo").style.transition="transform 0.2s"

}
