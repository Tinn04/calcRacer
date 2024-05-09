var qToAnsMap = {};
var keys = [];
var counter = 0;

window.onload = (event) => {
  let sentData = {};

  $.ajax({
    url: 'http://127.0.0.1:5000/data',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(sentData),
    success: function (response) {
      populate(response);
      runGame();
    },
    error: function (xhr, status, error) {
      // Handle error
      console.error('Error occurred:', xhr.responseText);
    }
  });
}

// fill global map with data fetched from API
function populate(response) {
  qToAnsMap["ln(x)"] = "1/x";
  qToAnsMap["tan(x)"] = "(sec(x))^2";
  qToAnsMap["sin(x)"] = "cos(x)";

  keys = Object.keys(qToAnsMap);
  console.log(keys.length);
}

//Display the math equation on the website screen
function runGame() {
    let userAns = prompt("What is the derivative of " + keys[counter] + "?");
    fetch("http://127.0.0.1:6969/data", {
      method: 'POST', 
      headers: {
        'Content-Type' : 'application/json'
      }, 
      body: JSON.stringify({ans : qToAnsMap[keys[counter]], user : userAns})
    }).then((r) => r.text())
      .then((data) => {
        console.log(data);
        if (counter < keys.length) {
          runGame();
        } else {
          alert("Done!");
        }
      });
    counter++;
}
