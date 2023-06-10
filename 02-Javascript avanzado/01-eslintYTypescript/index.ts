import './style.css';
console.log('Hola mundo desde archibo js');
const appElement = document.getElementById('app');

if (appElement) {
	appElement.innerHTML = '<h1>Hola mundo desde typescript</h1>';
}

