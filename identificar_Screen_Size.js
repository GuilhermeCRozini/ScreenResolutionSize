const botaoMostra = document.getElementById('botao-mostra');
const screenResolution = document.getElementById('display-screen-resolution');
const devicePixelRatio = document.getElementById('device-pixel-ratio');
const nativeResolutionMobile = document.getElementById('detect-the-native-resolution-of-a-mobile-device-display');

	function getResolution() {
		screenResolution.textContent = `Resolução da Tela: Width: ${screen.width}px x Height: ${screen.height}px`;
		devicePixelRatio.textContent = `Pixel Ratio do Dispositivo: ${window.devicePixelRatio}`;
		nativeResolutionMobile.textContent = `Resolução Nativa do Dispositivo: ${window.screen.width * window.devicePixelRatio} x ${window.screen.height * window.devicePixelRatio}`
	}