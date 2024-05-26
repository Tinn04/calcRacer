
let sentData = {};

let questionsList = ["Derivative of e^x^2", "Integral of 1/(x+1)", "Integral of 1/(x^2+1)", "Derivative of 12x^4 + 3x", "Integral of 2x^6", "Derivative of sin(2x)", "Integral of sin(2x)", "Derivative of x^16 + 12"];

//let answersList = ["2xe^x^2", ]

  //Display the math equation on the website screen

function start() {
  
  document.querySelector('.b1').style.display = 'none';
  document.querySelector('#selectDiff').style.display = 'none';
  document.querySelector('#difficulty').style.display = 'none';

  $.ajax({
      url: 'http://127.0.0.1:6969/data',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(sentData),
      success: function(response) {
        // Handle success
        sentData = response.equations;
      },
      error: function(xhr, status, error) {
        // Handle error
        console.error('Error occurred:', xhr.responseText);
      }
    });


    const selectElement = document.querySelector('#difficulty');
    if (selectElement.value === "easy") {
      easyMode();
    } else {
      hardMode();
    }
}


function easyMode() {

}

function hardMode() {

}

function genCalcProblem(){
    
}
