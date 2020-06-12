$(document).ready(function() {
//Business Logic
  function arrayBuilder(int){
    let array = []
    let intLength = int
    while (intLength >= 0) {
      array.unshift(parseInt(intLength))
      intLength -= 1
    }
    return array
  };

  function phraseConverter(array) {
    arrayTemp = []
    for (i=0; i < array.length; i++){
      let isThree = false
      let isTwo = false
      let isOne = false
      for (n=0; n < array[i].length; n++){
        if (array[i][n] === 3){
          isThree = true
          break;
        } else if (array[i][n] === 2) {
          isTwo = true
        } else if (array[i][n] === 1) {
          isOne = true
        }
      }
      if (isThree === true){
        arrayTemp.push("Won't you be my neighbor?")
      } else if (isThree === false && isTwo === true){
        arrayTemp.push("Boop!")
      } else if (isThree === false && isTwo === false && isOne === true){
        arrayTemp.push("Beep!")
      } else {
        arrayTemp.push(array[i])
      }
    }
    return arrayTemp;
  }
  function main(int){
    output = phraseConverter(arrayBuilder(int))
    return output
  }
//User Interface
  $("#numberForm").submit(function() {
    event.preventDefault()
    input = $("#numberInput").val()
    $("p.outputText").text(main(input).join(", "))
    $(".output").show()
  })
});