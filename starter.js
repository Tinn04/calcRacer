window.onload = (event) => {
    let sentData = {};

    $.ajax({
        url: 'http://127.0.0.1:6969/data',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(sentData),
        success: function(response) {
          // Handle success
          console.log(response); // Response from the server
        },
        error: function(xhr, status, error) {
          // Handle error
          console.error('Error occurred:', xhr.responseText);
        }
      });
}
  //Display the math equation on the website screen
  function genCalcProblem(){
    
  }
