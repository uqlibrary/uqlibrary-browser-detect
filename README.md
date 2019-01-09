# uqlibrary-browser-supported

[![Dependency Status](https://david-dm.org/uqlibrary/uqlibrary-browser-supported.svg)](https://david-dm.org/uqlibrary/uqlibrary-browser-supported)
[![Dev Dependency Status](https://david-dm.org/uqlibrary/uqlibrary-browser-supported/dev-status.svg)](https://david-dm.org/uqlibrary/uqlibrary-browser-supported?type=dev)

Javascript/html snippets that provide a function to check whether the user's browser is currently supported by the UQ Library.

```sh
bower install uqlibrary/uqlibrary-browser-supported
```

## preloader.html

preloader.html contains html snippet to display a loading image and unsupported browser message. 

To automatically inject this html snippet:

1. Insert into html page, eg index.html

```html
<!-- Preloader/Unsupported browser message -->
<!-- preloader will be inserted by gulp task, do not remove -->
#preloader#
<!-- End of Preloader/Unsupported browser message -->
```

1. Add this gulp task to your build procedure

```javascript
// inject preloader.html code into html pages
gulp.task('inject-preloader', function() {
var regEx = new RegExp("#preloader#", "g");
var browserUpdate=fs.readFileSync("app/bower_components/uqlibrary-browser-supported/preloader.html", "utf8");
return gulp.src(dist('*'))
    .pipe(replace({patterns: [{ match: regEx, replacement: browserUpdate}], usePrefix: false}))
    .pipe(gulp.dest(dist()))
    .pipe($.size({title: 'inject-preloader'}));
});
```

1. Insert following javascript snippet to hide/show preloader/unsupported message

```javascript
var browserData = browserSupported();
console.log(browserData.browser); // ie, chrome, safari, edge, opera
console.log(browserData.version);

if (!browserData.supported) {
  if (document.getElementById('preloader-unsupported'))
    document.getElementById('preloader-unsupported').style.display = 'block';
} else {
  if(document.getElementById('preloader-loading')) {
    document.getElementById('preloader-loading').style.display = 'block';
  }
}

window.addEventListener('WebComponentsReady', function(e) {

  //only display unsupported big message if web components can't be loaded
  if (document.getElementById('preloader-unsupported')) {
    document.getElementById('preloader-unsupported').style.display = 'none';
  }

  //hide loading screen once web components have been loaded
  if (document.querySelector('#preloader-loading')) {
    document.querySelector('#preloader-loading').style.display = 'none';
  }

});

```

## browser-update.js

browser-update.js contains js snippet to display a status bar in case browser is not supported

To automatically inject this js snippet:

1. Insert //bower_components/uqlibrary-browser-supported/browser-update.js where this js needs to be inserted
2. Add this gulp task to your build procedure

```javascript
gulp.task('inject-browser-update', function() {

var regEx = new RegExp("//bower_components/uqlibrary-browser-supported/browser-update.js", "g");
var browserUpdate=fs.readFileSync("bower_components/uqlibrary-browser-supported/browser-update.js", "utf8");

return gulp.src(<SOURCE>)
  .pipe(replace({patterns: [{ match: regEx, replacement: browserUpdate}], usePrefix: false}))
  .pipe(gulp.dest(<DESTINATION>))
  .pipe($.size({title: 'inject-browser-update'}));
});
```
