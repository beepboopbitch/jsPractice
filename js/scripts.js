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

function translator(num,char,spChar,xSpChar){
  if (num==0){
    return "";
  } else if(num==1){
    return char;
  } else if(num==2){
    return char+char;
  } else if(num==3){
    return char+char+char;
  } else if(num==4){
    return char+spChar;
  } else if(num==5){
    return spChar;
  } else if (num==6){
    return spChar+char;
  } else if (num==7){
    return spChar+char+char;
  } else if (num==8){
    return spChar+char+char+char;
  } else if (num==9){
    return char+xSpChar;
  }
}

function romanizer(number){
  if (parseInt(number)<4000){
    var romanNumeralOutput="";
    var numArray=number.split("");
    for (var i=0;numArray.length<4;i++){
      numArray.unshift("0")
    }
    romanNumeralOutput += translator(numArray[0],"M","Y","Z");
    romanNumeralOutput += translator(numArray[1],"C","D","M");
    romanNumeralOutput += translator(numArray[2],"X","L","C");
    romanNumeralOutput += translator(numArray[3],"I","V","X");
    return romanNumeralOutput;
  } else {
    alert("Alert! Roman Numerals don't go past 3999!");
  }
}

// function encrypter(sentence){
//   var sentArray=sentence.split("");
//   var noSpaces=sentArray.forEach(function(item){
//     console.log(item);
//   })
//   var sL=sentence.length;
//   var size= Math.ceil(Math.sqrt(sL);
//   for (var i=0; i<size;i++){
//     for(var i=0;i<size;i++){
//
//     }
//   }
// }

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
  $("form#romeForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#romeInput").val();
    var outputSentence = romanizer(userInput);
    $("p#romeOutput").text(outputSentence).show();
  })
});
