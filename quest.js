let sendbutton = document.querySelector(".send-button")
let button = document.querySelector(".button")
let pointsLabel = document.querySelector(".points-label")
let questLabel = document.querySelector(".quest-label")
let anslabel1 = document.querySelector(".ans-label1")
let anslabel2 = document.querySelector(".ans-label2")
let anslabel3 = document.querySelector(".ans-label3")
let anslabel4 = document.querySelector(".ans-label4")
let hiddenn = document.querySelector(".hidden")
let quizForm = document.querySelector("form");
let finishedScreen = document.querySelector(".finished-hidden");
let label2 = document.querySelector("#label2");
let buttoncheck = document.querySelector("#bottoncheck");
let points = 0;

button.addEventListener("click", showQ);

const quest = ["what color is a mirror?", "what is the best electrical conductor ", "how many number are there betwen 0 and 10"];

const ans1 = ["None", "gold", "10"];
const ans2 = ["Green", "silver", "8"];
const ans3 = ["Blue", "copper", "9"];
const ans4 = ["Red", "iron", "1"];


const right = "you where right click next question for a new question";
var x = document.getElementById("hidden");
if (x.style.display == "block") {

}
else {
  x.style.display = "none";
}

function showQ() {
    let q = Math.floor(Math.random() * quest.length);
        questLabel.innerHTML = quest[q];

    
        anslabel1.innerHTML = ans1[q]
        anslabel2.innerHTML = ans2[q]
        anslabel3.innerHTML = ans3[q]
        anslabel4.innerHTML = ans4[q]
        
  
        let selectedAnswers = document.querySelectorAll("input:checked");
        points = 0;
        
        for (let i = 0; i < selectedAnswers.length; i++) {
            selectedAnswers[i].checked = false;
        }
    }
    
        function hide() {
            var x = document.getElementById("hidden");
    if (x.style.display === "block") {
        x.style.display = "none";
        
    }
    else {
        x.style.display = "none";
    }
        }

    
//     let n = document.getElementById("label2");
//     //  fel kolla om du kan få exakt numer 
    
//     if(test = checked){
//         anslabel2.innerHTML = ans2[2]

//     }



//     function right() {
//         let points = 0;
//         let answers = document.querySelectorAll("input:checked");
//         for (let answer = 0; answer < questLabel.length; answer++) {
//             points += parseInt(answers[answer].value, 10);
//         }
//         quizForm.classList.toggle("hidden");
//         pointsLabel.innerHTML = points;
//         hiddenn.classList.toggle("hidden");
//    }

//    function display() {
//     if(document.querySelector(input[q2].checked)){
//         anslabel2.innerHTML = ans1[0]
//     }
// }




function testFunction() {
    var x = document.getElementById("hidden");
    if (x.style.display == "none") {
      x.style.display = "block";
    }
   

        if(label2.checked){

            pointsLabel.innerHTML = "you where right click to try again"
        }
            
            else {
                pointsLabel.innerHTML = "you where wrong click to try again or go for a new question"
            }
                    
    

        
    
    
    }





    /*if(label2.checked) {
        document.getElementById("pointsLabel").innerHTML
            = label2.value
            + " radio button checked";
            anslabel2.innerHTML = ans1[0]
   }*/
