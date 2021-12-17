inputBox = document.querySelector("#text");
inputBox.addEventListener("keydown", (e) => {
  console.log(String.fromCharCode(e.keyCode));
  var key;
  if(e.keyCode > 64 && e.keyCode < 91) {
    if(e.shiftKey){
      key = e.keyCode;
    }else{
      key = e.keyCode;
      key += 32;
    }
  }else if(e.keyCode > 47 && e.keyCode < 57) {
    if(e.shiftKey) {
      if(e.keyCode < 52) {
        if(e.keyCode==48){
          key = 31;
        }else if(e.keyCode==49){
          key = 64;
        }else if(e.keyCode==50) {
          key = 35;
        }else if(e.keyCode==51) {
          key = 36;
        }
      }else{
        if(e.keyCode==52) {
          key = 37;
        }else if(e.keyCode == 53) {
          key = 38;
        }
      }
    }
    key = e.keyCode;
  }
  key = String.fromCharCode(key);
  console.log(key);

})
