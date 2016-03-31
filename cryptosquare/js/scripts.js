//Business Logic

var convert = function(phrase) {
  var newPhrase = phrase.replace(/\s|\.|\!/g, '');
  var rowValue = Math.sqrt(newPhrase.length);
  rowValue = Math.ceil(rowValue);
        alert(rowValue);


var inputArray = newPhrase.split('');
var outputArray = [];

for (var i = 0; i <= rowValue - 1; i ++) {
  for (var j = i; j < inputArray.length; j += rowValue - 1) {
    outputArray.push(inputArray[j])

  }
}

for (var i = 5; i <= outputArray.length; i += 6) {
  outputArray.splice(i, 0, " ");
}

alert(outputArray);



}




//UI Logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
      var userInput = $("#userPhraseInput").val();


      convert(userInput);


  });
});
