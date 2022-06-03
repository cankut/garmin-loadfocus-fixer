var s = document.createElement('script');
s.src = chrome.runtime.getURL('fix-garmin.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.remove();
};