import Alpine from 'alpinejs'
import HomePage from './pages/Home';

window.Alpine = Alpine

Alpine.start()

document.querySelector('#app').innerHTML = HomePage();
