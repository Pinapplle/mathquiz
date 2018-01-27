




function checkAnswers(){
  var answersCorrect=0
  if(document.getElementById("1c").checked) {
    answersCorrect++;
  }
   if(document.getElementById("2b").checked) {
    answersCorrect++;
  }
   if(document.getElementById("3b").checked) {
    answersCorrect++;
  }
   if(document.getElementById("4a").checked) {
    answersCorrect++;
  }
   if(document.getElementById("5b").checked) {
    answersCorrect++;
  }
  document.getElementById("answers").innerHTML = "Answers right: " + answersCorrect;
}
