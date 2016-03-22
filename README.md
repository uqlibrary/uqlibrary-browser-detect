# uqlibrary-browser-supported

A simple component that provides a function to check whether the user's browser is currently supported by the UQ
Library.

```bower install uqlibrary/uqlibrary-browser-supported```

```
var data = browserSupported();
console.log(data.browser); // ie, chrome, safari, edge, opera
console.log(data.version);

if (!data.supported) {
    console.log("Your browser is not supported");
}
```

## browser-update.js

browser-update.js contains js to display a status bar in case browser is not supported

To automatically inject this js:

1. Insert //bower_components/uqlibrary-browser-supported/browser-update.js where this js needs to be inserted
2. Add this gulp task to your build procedure

```
gulp.task('inject-browser-update', function() {

var regEx = new RegExp("//bower_components/uqlibrary-browser-supported/browser-update.js", "g");
var browserUpdate=fs.readFileSync("bower_components/uqlibrary-browser-supported/browser-update.js", "utf8");

return gulp.src(<SOURCE>)
    .pipe(replace({patterns: [{ match: regEx, replacement: browserUpdate}], usePrefix: false}))
    .pipe(gulp.dest(<DESTINATION>))
    .pipe($.size({title: 'inject-browser-update'}));
});
```