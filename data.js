"use strict";

const keywords = ["False",	"await",	"else",	"import",	"pass",
"None",	"break",	"except",	"in",	"raise",
"True",	"class",	"finally",	"is",	"return",
"and",	"continue",	"for",	"lambda", 	"try",
"as",	"def",	"from",	"nonlocal",	"while",
"assert",	"del",	"global",	"not",	"with",
"async",	"elif",	"if",	"or",	"yield"];

function keyDict() {
  // getting all the words in to the structer
  this.searchNode = function(node) {
    if(node in this){
      const { temp } = this;
      console.log(temp);
      return node;
    }else{
      return false;
    }
  }
  this.find =  function(word) {
    var len = word.length;
    var i = 0;
      if(word[i] in this){
        i = i + 1;
        return this.find(i);
      }else{
        if(word==this.word){
          return true;
        }else{
          return false;
        }
    }
  }
  var theWordToAdd;
  this.addLetter = function(letter) {
     if(letter in this) {
       // temp = { [letter]: this.addLetter(letter) };
       // return Object.assign(this.);
       return ((letter) => {
         var temp = this;
         var x = temp[letter];
         return x.addLetter(letter);
       })()
     }else{
      var item = new this.constructor();
      // item = Object.assign(item, {[letter]: {}})
      return Object.assign(this, item);
    }
  }
  //generating the letters and heirarchy of the letters with
  this.addWord = function(word, first=false) {
    if(first==true){
      theWordToAdd = word
    }
    var wordList = [...word];
    if(wordList.length>0){
      var letter = wordList.shift();
      var node = new this.constructor();
      var temp = node.addLetter(letter);
      Object.assign(this, {[letter]: temp});
      return node.addWord(wordList.join(""));
    }else{
      this.word = theWordToAdd;
      return this;
    }
   }
  // and store the final word to it's position
    this.setWord = function(word) {
      Object.assign(this.addWord(word), {word: word});
    }
  // get a continous list of words and make suggestions

  // identify the words and highlight them.

}

var keywordDictionary = new keyDict();
keywords.forEach((item) => {
  keywordDictionary.setWord(item);
});

console.log(keywordDictionary);

// function KeyWordDict() {____
//
//   this.addLetter = function(letter, node) {
//     if(letter in node){
//       return node.letter;
//     }else{
//       var temp = new this.constructor();
//       return Object.assign(node, {[letter]: temp});
//     }
//   }
//
//   this.addWord = function(word, node) {
//     var temp = new this.constructor();
//     [...word].forEach((i) => {
//       var temp = node.addLetter(i, node);
//       node = temp;
//       Object.assign()
//     })
//     return Object.assign(temp, {word: word});
//   }
// }
//
// var keyWordDictObj = new KeyWordDict();
// keywords.forEach((item) => {
//   keyWordDictObj.addWord(item);
// });
//
// // var keyWordDict = {
// //   addWord: (word, wordDictionary) => {
// //     var node = wordDictionary;
// //     function checkLetter(letter, wordDict) {
// //       if(letter in wordDict){
// //         return wordDict[letter];
// //       }else{
// //         item = new this.constructor();
// //         return Object.assign(wordDict, item);
// //       }
// //     }
// //
// //     [...word].forEach((i) => {
// //       var x = checkLetter(i, this);
// //       node = Object.assign(node, x);
// //     });
// //     item = {"word": word};
// //     return Object.assign(node, item);
// //   },
// //   addLetter: (letter) => {
// //     if(letter in this){
// //       return this.a;
// //     }else{
// //       var temp = new this.constructor();
// //       var item = {[letter]: temp};
// //       return Object.assign(this, temp);
// //     }
// //   }
// // }
// //
// // var len = keywords.length;
// //
// // function loadDictionary() {
// //   for( var i=0; i<len; i++){
// //       var word = keywords[i];
// //       var wordLen = keywords[i].length;
// //       var currentNode = keyWordDict;
// //       for( var j=0; j<wordLen; j++) {
// //         var letter = word[j];
// //         if( letter in currentNode){
// //           console.log(currentNode);
// //           currentNode = currentNode[letter];
// //         }else{
// //           item = {[letter]: {}}
// //           currentNode = Object.assign(currentNode, item);
// //         }
// //         var item = {"word": word}
// //         currentNode = Object.assign(currentNode, item);
// //       }
// //
// //   }
// // }
// //
// // loadDictionary()
// console.log(keyWordDictObj);
