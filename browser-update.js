  var $buoop = {
    vs: {i: 10, f: 30, o: 15, s: 7, c: 36},  // browser versions to notify
    reminder: 0,                   // after how many hours should the message reappear, 0 = show all the time
    test: false,                    // true = always show the bar (for testing)
    text: "Your current browser is not on UQ Library\`s list of supported browsers. If you experience any problems with this site, please try using the site \
    with a different browser, or upgrade your current browser to the latest version. \
    If you are using assistive technology, please refer to our support for users with disabilities. \
    If you experience any problems with this site, there are Library staff who can provide assistance and supply information in a format that meets your needs. \
    <a href='http://browser-update.org/update.html'>Download latest browser here</a>",
    newwindow: true                 // open link in new window/tab
  };

  function $buo_f(){
    var e = document.createElement("script");
    e.src = "//browser-update.org/update.min.js";
    document.body.appendChild(e);
  };

  try {
    document.addEventListener("DOMContentLoaded", $buo_f,false)
  }
  catch(e){
    window.attachEvent("onload", $buo_f)
  }
