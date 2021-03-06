class KeyEvents {
	constructor() {
		this._passwordInputEl = document.querySelector('#passwordInput');
		this._registerOnKeyDown();
	}

	// Document on key down events
	_registerOnKeyDown() {
		document.onkeyup = (e) => {
			if (e.key === 'Escape') {
				// Prevent default escape key function
				e.preventDefault();

				// Power Screen
				if (powerScreen.getPowerScreenVisibility()) {
					powerScreen.togglePowerScreen();
					return;
				}

				// Sessions Screen
				if (sessionsScreen.getSessionsScreenVisibility()) {
					sessionsScreen.hideSessionsScreen();
					return;
				}
			}
		};
	}
}
