const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 6969;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/data", async (req, res) => {
  const prom = req.body;
  try {
    res.send("reeters");
  } catch (error) {
    console.error(error);
    res.status(500).send("Couldn't send reet singh");
  }
});

// app.listen(port, () => {
//   console.log('Server running on port ' + port);
// });


// Make sure to encode the input for URL
var query = encodeURIComponent("is (sin(x))^2 equal to x^2");
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


