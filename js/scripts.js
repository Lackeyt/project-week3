$(document).ready(function() {
//Business Logic
  //Converts an integer into an array of numbers counting from 0-->input integer
  function arrayBuilder(int){
    let array = []
    let intLength = int
    while (intLength >= 0) {
      array.unshift(parseInt(intLength))
      intLength -= 1
    };
    return array
  };

  //Replace elements in an array of numbers with Phrases
  function phraseConverter(array) {
    arrayTemp = []
    for (i=0; i < array.length; i++){
      let isThree = false
      let isTwo = false
      let isOne = false
      let stringElement = array[i].toString()
      for (n=0; n < stringElement.length; n++){
        if (stringElement[n] === "3"){
          isThree = true
          break;
        } else if (stringElement[n] === "2") {
          isTwo = true
        } else if (stringElement[n] === "1") {
          isOne = true
        };
      };
      if (isThree === true){
        arrayTemp.push("Won't you be my neighbor?")
      } else if (isThree === false && isTwo === true){
        arrayTemp.push("Boop!")
      } else if (isThree === false && isTwo === false && isOne === true){
        arrayTemp.push("Beep!")
      } else {
        arrayTemp.push(array[i])
      };
    };
    return arrayTemp;
  };

  function isError(int) {
    if (Number.isInteger(int) === true && int >= 0){
      return false;
    } else {
    return true;
    }
  };

  //Main function taking integer input, returns converted array
  function main(int){
    output = phraseConverter(arrayBuilder(int));
    return output;
  };

//User Interface
  //On form Submission
  $("#numberForm").submit(function() {
    event.preventDefault();

    $("div#transitionIn").removeClass("show")
    $("div#output").addClass("show")

    input = parseFloat($("#numberInput").val());

    $(".output").show();
    if (isError(input) === true) {
      $("p.outputText").text("Beep Boop... I can only count positive, whole numbers neighbor.")
    } else if (input > 100000) {
      $("p.outputText").text("Beep Boop... Your number is too big there, neighbor. I can only count to 100000.")
    } else {
      $("p.outputText").text(main(input).join(", "))
    };
  });

  //On Try Again button click
  $("#tryAgain").click(function() {
    location.reload();
  });
});