var fglog = function(m){
    console.log(m);
}

var s = document.createElement('script');
s.src = chrome.runtime.getURL('fix-garmin.js');
(document.head||document.documentElement).appendChild(s);
fglog("appended script...");
s.onload = function() {
    fglog("removing script...");
    s.remove();
};