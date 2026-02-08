//const answers = ["lmao","boa","samreich"]
answers = ["secret garden", "boa", "samreich", "cabride", "squee", "aheadoftime", "yamask","goinggreen"];
userans = ["---", " ", " ", " ", " ", " ", " ", " "]
hiddens = [0,0,0,0,0,0,0,0];
solveds = [0,0,0,0,0,0,0,0];

window.addEventListener("load", () => {
    let cookieData = document.cookie;
    cookieData = cookieData.split("; ");
    lenCookieData = cookieData.length;

    for (let i=0; i < lenCookieData; i++) {
        document.getElementById("clear").innerHTML += "<br>"+cookieData[i];
    }
    /*if (cookieData.length() != 0) {
        document.getElementById("save").innerHTML = "klasdhkjhsadf";
    }*/
});

function clearCookies() {
    console.log("hi");
    document.cookie = "saveDate=oops; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=None; Secure";
}

function saveAns() {
    let saveDate = new Date();
    let expireDate = Date.now() + 60*60*1000;
    m = saveDate.getMonth()+1;
    if (m < 10) {m = "0"+m;}
    curDate = saveDate.getFullYear() + "-" + m + "-" + saveDate.getDate();
    m = saveDate.getMinutes();
    if (m < 10) {m = "0"+m;}
    s = saveDate.getSeconds();
    if (s < 10) {s = "0"+s;}
    k = 1000 + saveDate.getMilliseconds();
    l = k.toString().slice(1,4);
    curTime = saveDate.getHours() + ":" + m + ":" + s + "." + l;
    document.getElementById("save").innerHTML = "Save answers<br>for 30 days";
    document.getElementById("save").innerHTML += "<br>Saved!" + "<br><br>Last Save:<br>" + curDate + "<br>" + curTime;
    
    document.cookie = "saveDate="+saveDate.toUTCString()+"; expires=" + expireDate + "; path=/; SameSite=None; Secure";
}

function hide(sect) {
    if (hiddens[sect]==0) {
        document.getElementById("theme"+sect).style.display = "block";
        document.getElementById("hide"+sect).innerHTML = "v";
        hiddens[sect] = 1
    }
    else {
        document.getElementById("theme"+sect).style.display = "none";
        document.getElementById("hide"+sect).innerHTML = ">";
        hiddens[sect] = 0
    }
}

function check(sect) {
    var submits = [0,ans1.value,ans2.value,ans3.value,ans4.value,ans5.value,ans6.value,ans7.value];
    disabls = [0,ans1.disabled,ans2.disabled,ans3.disabled,ans4.disabled,ans5.disabled,ans6.disabled,ans7.disabled];
    var userAns = submits[sect].replace(/\s/g, '').toLowerCase()

    if (!disabls[sect] && solveds[sect] == 0) {
        if (sect==1){ans1.disabled=true}; 
        if (sect==2){ans2.disabled=true}; 
        if (sect==3){ans3.disabled=true}; 
        if (sect==4){ans4.disabled=true}; 
        if (sect==5){ans5.disabled=true}; 
        if (sect==6){ans6.disabled=true}; 
        if (sect==7){ans7.disabled=true}; 

        if (userAns == answers[sect]) {
            document.getElementById("meta"+sect).style.display = "block";
            document.getElementById("right"+sect).style.display = "inline";
            document.getElementById("submit"+sect).innerHTML = "Correct";
            solveds[sect] = 1;
        }
        else {
            document.getElementById("wrong"+sect).style.display = "inline";
            document.getElementById("submit"+sect).innerHTML = "Retry";
        }
    }
    else {
        if (solveds[sect] == 0) {
            if (sect==1){ans1.disabled=false}; 
            if (sect==2){ans2.disabled=false}; 
            if (sect==3){ans3.disabled=false}; 
            if (sect==4){ans4.disabled=false}; 
            if (sect==5){ans5.disabled=false}; 
            if (sect==6){ans6.disabled=false}; 
            if (sect==7){ans7.disabled=false}; 
            document.getElementById("submit"+sect).innerHTML = "Check";
            document.getElementById("wrong"+sect).style.display = "none";
        }
    }
}

taxisays = [
    [
        "",
        "जयपुर<br>कृपया"
    ],
    [
        "1 New York City, USA",
        "Hello, can you please take me to Radio City Music Hall.",
        "Please take me to Rockefeller Center.",
        "I would like to go to Grand Central Terminal",
        "I have an reservation to go the 86th floor observatory. Please go quick!",
        "My favorite band is performing at Madison Square Garden soon.",
        "Thank you for the ride!"
    ],
    [
        "2 Amsterdam, Netherlands",
        "We moeten naar het Grachtenmuseum",
        "Breng ons alstublieft naar het H'ART museum",
        "Het wetenschapsmuseum NEMO zag er interessant uit. Kunnen we daarheen?",
        "Ik wil het schilderij van Vermeer 'Het Melkmeisje' zien",
        "We willen foto's maken voor het koninklijk paleis",
        "Bedankt voor de rit!"
    ],
    [
        "3",
        ""
    ],
    [
        "4"
    ],
    [
        "5"
    ],
    [
        "6"
    ],
    [
        "7"
    ]
];
taxinos = [0,0,0,0,0,0,0,0];
function say(taxinum) {
    document.getElementById("dir3").style.display = "none";

    taxinos[taxinum] = (taxinos[taxinum]+1)%(taxisays[taxinum].length);
    document.getElementById("taxilog"+taxinum).innerHTML = taxisays[taxinum][taxinos[taxinum]];

    if (taxinos[taxinum]!=0){
        document.getElementById("taxilog"+taxinum).style.display = "grid";
    }   
    else {document.getElementById("taxilog"+taxinum).style.display = "none";}
}