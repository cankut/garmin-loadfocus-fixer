function fglog(m){
	console.log(m);
}

function fixgarmin() {

	fglog("executing fixgarmin script...");
	var rawOpen = XMLHttpRequest.prototype.open;

	XMLHttpRequest.prototype.open = function () {

		var url = arguments[1];
		if (url.indexOf("deviceregistration") >= 0) {
			if (!this._hooked) {
				this._hooked = true;
				setupHook(this);
			}
		}
		rawOpen.apply(this, arguments);
	}

	function setupHook(xhr) {

		fglog("setting up hook...");

		function getter() {

			delete xhr.responseText;
			fglog("replacing text...");
			var ret = xhr.responseText.replace('"trainingLoadBalanceCapable":false', '"trainingLoadBalanceCapable":true');
			setup();
			return ret;
		}

		function setter(str) {

		}

		function setup() {
			Object.defineProperty(xhr, 'responseText', {
				get: getter,
				set: setter,
				configurable: true
			});
		}
		setup();
	}

}


setTimeout(function() {fixgarmin();}, 0);