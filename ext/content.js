'use strict';

(function() {
  const url = chrome.extension.getURL('build.js');
  const script = document.createElement('script');
  script.src = url;
  (document.head || document.documentElement).appendChild(script);
})();
