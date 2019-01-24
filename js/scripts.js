function countVowels(sentence){
  var finalCount=0;
    if (sentence) {
      var lowerSentence=sentence.toLowerCase();
      for (var i=0;i<sentence.length;i++){
        if (lowerSentence[i]==="a"||lowerSentence[i]==="e"||lowerSentence[i]==="i"||lowerSentence[i]==="o"||lowerSentence[i]==="u"||lowerSentence[i]==="y"){
          finalCount ++;
        }
      }
      return finalCount
    } else {
      alert("enter a sentence")
    }

}

$(document).ready(function(){
  $("form#sen").submit(function(event){
    event.preventDefault();
    var userInput = $("input#sentence").val();
    var finalCount = countVowels(userInput);
    $("span.answer").text(finalCount);
    $("p.outputSentence").show();

  });
});
