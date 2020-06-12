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
//User Interface
  $("#numberForm").submit(function() {
    event.preventDefault()
    input = $("#numberInput").val()
    $("p.outputText").text(arrayBuilder(input).join(", "))
    $(".output").show()
  })
});