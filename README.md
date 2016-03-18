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