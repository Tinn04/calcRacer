// import modules
const OpenAIApi = require("openai");
const Configuration = require("openai");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 6969;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// the API key (should be in a secure location under regular circumstances)
OPENAI_API_KEY = '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'

// creating a configuration object to authenticate requests using the OpenAI key
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

// data transfer and shi
const openai = new OpenAIApi(configuration);
app.post("/data", async (req, res) => {
  try {
    res.send("reeters");
  } catch (error) {
    console.error(error);
  }
});

// app.listen(port, () => {
//   console.log('Server running on port ' + port);
// });

// provide prompt to ChatGPT and get response
const userInput = "give a random differentiable expression in plain text";
async function getResponse() {
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `${userInput}`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  let data = response.choices[0].message.content;
  // output response to console
  return data.slice(data.indexOf('=')+1);
};

// Function to generate a random simple derivative question
function generateDerivativeEasy() {
  // Define an array of functions
  const functions = [
    { func: "420" },
    { func: "69" },
    { func: "x" },
    { func: "x^2" },
    { func: "x^3" },
    { func: "sin(x)" },
    { func: "cos(x)" },
    { func: "tan(x)" },
    { func: "e^x" },
    { func: "ln(x)" },
    { func: "sec(x)" },
  ];

  // Select a random function
  const randomIndex = Math.floor(Math.random() * allFunctions.length);
  const selectedFunction = allFunctions[randomIndex];
}

// generate a random derivative question using ChatGPT API
function generateDerivativeMedium() {
  const userInput = "give a random differentiable function in plain text";
  return getResponse();
}

// generate a random difficult derivative question using ChatGPT API
function generateDerivativeHard() {
  const userInput = "give a random difficult differentiable function in plain text";
  return getResponse();
}

// Preload medium questions and store
var questionsMed = [
  { func: "blank", answer: "blank" },
];

for ( var i = 0; i < 5; i++ ) {
  getResponse().then((value) => {
    console.log(value);
  });
}

// preload hard questions and store
var questionsHard = [
  { func: "blank", answer: "blank" },
];

for ( var i = 0; i < 5; i++ ) {
  //var derivative = generateDerivativeHard();
  //questionsHard.push( {func: derivative, answer: "Blank"} );
}


function getAnswer(string) {
  var query = encodeURIComponent("differentiate " + string);
  var parser = require('xml2js').parseString;

// Your API endpoint with the query
var apiEndpoint =
  "https://api.wolframalpha.com/v2/query?input=" +
  query +
  "&appid=JPEPHY-XVHGHVUT6Q";

// Make an AJAX request to the Wolfram Alpha API
fetch(apiEndpoint)
  .then((response) => response.text())
  .then((data) => {

    parser(data, function(err, result) {

      var obj = JSON.parse(JSON.stringify(result));
      console.log(obj.queryresult.pod[1].subpod[0].plaintext[0]);

      // Get result from differentiation
      // var obj = JSON.parse(JSON.stringify(result));
      // console.log(obj.queryresult.pod[0].subpod[0].plaintext);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}

