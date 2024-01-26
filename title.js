if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
  } else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
  }
  function loaded() {
    setInterval(loop, 250);
  }
  var x = 0;
  var titleText = [ "f", "fc", "fck", "fckg", "fckgn", "fckgng","fckgng.l", "fckgng.lo", "fckgng.lol", "fckgng.lo", "fckgng.l", "fckgng.", "fckgng", "fckgn", "fckg", "fck", "fc", "f" ];
  
  function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
  }