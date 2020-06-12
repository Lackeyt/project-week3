$(document).ready(function() {
//Business Logic
  //Converts an integer into an array of numbers counting from 0-->input integer
  function arrayBuilder(int, altFlag){
    let array = [];
    let intLength = int;
    if (altFlag === false){
      while (intLength >= 0) {
        array.unshift(parseInt(intLength));
        intLength -= 1;
      };
    } else if (altFlag === true) {
      while (intLength >= 0) {
        array.push(parseInt(intLength));
        intLength -= 1;
      };
    };
    return array;
  };

  //Replace elements in an array of numbers with Phrases
  function phraseConverter(array) {
    arrayTemp = []
    for (i=0; i < array.length; i++){
      let isThree = false;
      let isTwo = false;
      let isOne = false;
      let stringElement = array[i].toString();

      for (n=0; n < stringElement.length; n++){
        if (stringElement[n] === "3"){
          isThree = true;
          break;
        } else if (stringElement[n] === "2") {
          isTwo = true;
        } else if (stringElement[n] === "1") {
          isOne = true;
        };
      };
      
      if (array[i] === 0) {
        arrayTemp.push(array[i]);
      } else if (array[i] % 3 === 0 && userName){
        arrayTemp.push("Won't you be my neighbor, " + userName + "?");
      } else if (array[i] % 3 === 0 && !userName){
        arrayTemp.push("Won't you be my neighbor?")
      } else {
        if (isThree === true){
          arrayTemp.push("Won't you be my neighbor?");
        } else if (isThree === false && isTwo === true){
          arrayTemp.push("Boop!");
        } else if (isThree === false && isTwo === false && isOne === true){
          arrayTemp.push("Beep!");
        } else {
          arrayTemp.push(array[i]);
        };
      };
    };
    return arrayTemp;
  };

  //error handling for invalid entries
  function isError(int) {
    if (Number.isInteger(int) === true && int >= 0){
      return false;
    } else {
    return true;
    };
  };

  //Main function taking integer input, returns converted array
  function main(int, altFlag){
    if (!int){
      output = "Beep Boop... You didn't enter anything, Neighbor.";
    } else if (isError(int) === true) {
      output = "Beep Boop... I can only count positive, whole numbers neighbor.";
    } else if (int > 100000) {
      output = "Beep Boop... Your number is too big there, neighbor. I can only count to 100000.";
    } else {
      output = phraseConverter(arrayBuilder(int, altFlag)).join(", ");
    };
    return output;
  };

//User Interface
  //On form Submission "Neighborize!"
  $("#numberForm").submit(function() {
    event.preventDefault();
    let altFlag = false
    let input = parseFloat($("#numberInput").val());
    userName = $("#userName").val();
    $("div#transitionIn").removeClass("show");
    $("div#output").addClass("show");
    $(".output").show();
    $("p.outputText").text(main(input, altFlag));
  });

  //on alternate form submission "Neighborize Backwards!"
  $("#btnAlt").click(function() {
    event.preventDefault();
    userName = $("#userName").val();
    let altFlag = true
    let input = parseFloat($("#numberInput").val());
    $("div#transitionIn").removeClass("show");
    $("div#output").addClass("show");
    $(".output").show();
    $("p.outputText").text(main(input, altFlag));
  });

  //On "Try Again" button click
  $("#tryAgain").click(function() {
    location.reload();
  });
});