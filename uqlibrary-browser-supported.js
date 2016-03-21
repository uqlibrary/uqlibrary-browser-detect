(function (name, def) {
  this[name] = def();
})('browserSupported', function () {
  "use strict";

  var supportedBrowserVersions = {
    chrome: 40,
    firefox: 42,
    opera: 35,
    safari: 6,
    ie: 11,
    edge: 1
  };

  return function () {
    var browser;
    var version;
    var userAgent = navigator.userAgent.toLowerCase();

    // First check for EDGE. It supplies both "edge", "safari" and "chrome" as user agents
    var browserParts = /(edge)(?:.*version)?(?:[ \/])?([\w.]+)/.exec(userAgent);
    if (!browserParts || browserParts.length <= 2) {
      browserParts = /(ie|firefox|chrome|safari|opera)(?:.*version)?(?:[ \/])?([\w.]+)/.exec(userAgent);
    }

    // Parse browser parts
    if (browserParts && browserParts.length > 2) {
      browser = browserParts[1];
      version = browserParts[2];
    } else if (!! userAgent.match(/trident\/7\./)) {
      browser = 'ie';
      version = 11;
    }

    var data = {
      browser: browser,
      version: version,
      supported: (supportedBrowserVersions[browser] <= parseInt(version))
    };

    return data;
  }
});