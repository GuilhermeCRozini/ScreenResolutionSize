const botaoMostra = document.getElementById('botao-mostra');
const areaMostra = document.getElementById('area-mostra');

	function getResolution() {
		areaMostra.innerHTML = '';

			areaMostra.textContent = `Width: ${screen.width} x Height: ${screen.height}`;

	}