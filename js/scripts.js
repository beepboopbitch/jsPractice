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
};

function leapProcesser(year){
  if (year % 400 === 0){
    return true
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true
  } else {
    return false
  }
}

function pigLatinizer(sentence){
  var lowerSentence=sentence.toLowerCase();
  var sentArray= lowerSentence.split(" ");
  var pigLatinArray = sentArray.map(function(word){
    if(word[0]==="a"||word[0]==="e"||word[0]==="i"||word[0]==="o"||word[0]==="u"){
      return word+"way";
    } else {
      var firstLetters= "";
      for (var i=0;i<word.length;i++){
        if(word[i]==="q" && word[i+1]==="u"){
            firstLetters+="qu";
        }
        if(word[i]==="a"||word[i]==="e"||word[i]==="i"||word[i]==="o"||word[i]==="u"||word[i]==="q"){
          var minusFirstLetters= word.substring(firstLetters.length,word.length);
          return minusFirstLetters + firstLetters +"ay"
        }
        else {
          firstLetters += word[i];
        }
      }
    }
    });
    return pigLatinArray.join(" ");
}
console.log(pigLatinizer("question, The bookshelf is a book treasure?"));

$(document).ready(function(){
  $("form#sen").submit(function(event){
    event.preventDefault();
    var userInput = $("input#sentence").val();
    var finalCount = countVowels(userInput);
    $("span.answer").text(finalCount);
    $("p#outputSentence").show();
  });
  $("form#leapForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#yearInput").val();
    var conclusion= leapProcesser(userInput);
    if (conclusion===false){
      $("span.yearDetermination").text("not ")
    } else {
      $("span.yearDetermination").text("");
    }
    $("p#yearOutput").show();
  });
  $("form#pigForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#pigInput").val();
    var pigLatinTranslation = pigLatinizer(userInput);
    $("p#pigOutput").text(pigLatinTranslation).show();

  });
});
