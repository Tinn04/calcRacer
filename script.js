const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 6969;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/data", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    var query = encodeURIComponent("is " + data.ans + " equal to " + data.user);
    var parser = require('xml2js').parseString;

    // Your API endpoint with the query
    var apiEndpoint = "https://api.wolframalpha.com/v2/query?input=" + query + "&appid=JPEPHY-XVHGHVUT6Q";

    // Make an AJAX request to the Wolfram Alpha API
    var dataToSend = await fetch(apiEndpoint)
      .then((response) => response.text())
      .then((data) => {

        var json;
        parser(data, function (err, result) {

          try {
            var obj = JSON.parse(JSON.stringify(result));
            var result = obj.queryresult.pod[1].subpod[0].plaintext[0];
            json = {check : result};
          } catch (err) {
            json = {check : "nothing"};
          }
        });

        return json;
      });

      res.send(dataToSend);

  } catch (error) {
    console.error(error);
    res.status(500).send("Couldn't send reet singh");
  }
});

app.listen(port, () => {
  console.log('Server running on port ' + port);
});



