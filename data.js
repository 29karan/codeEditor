"use strict";

const keywords = ["False",	"await",	"else",	"import",	"pass",
"None",	"break",	"except",	"in",	"raise",
"True",	"class",	"finally",	"is",	"return",
"and",	"continue",	"for",	"lambda", 	"try",
"as",	"def",	"from",	"nonlocal",	"while",
"assert",	"del",	"global",	"not",	"with",
"async",	"elif",	"if",	"or",	"yield"];

function KeyDict() {
  this.data = {};
  this.addLetter = function(letter, node=this.data) {
    if(letter in node) {
      return node[letter];
    }else{
      var temp = Object.assign(node, {[letter]: {}});
      return temp[letter];
    }
  }

  this.createWordStructure = function(word, node=this.data) {
    var wordList = word.split("");
    var len = wordList.length;
    for(var i=0; i<len; i++) {
      node = this.addLetter(wordList[i], node);
    }
    return node;
  }

  this.addWord = function(word) {
    var node = this.createWordStructure(word);
    return Object.assign(node, {word: word});
  }

  this.findWord = function(word, node=this.data) {
    if(word in node){
      return true;
    }else{
      return false;
    }
  }
}
