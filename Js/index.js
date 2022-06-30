import { Router } from './router.js'

const daWae = new Router()
daWae.add('/',"/pages/Home.html");
daWae.add('/theUniverse',"/pages/theUniverse.html");
daWae.add('/exploration',"/pages/exploration.html");
daWae.add(404, "/pages/404.html");

daWae.handle();

window.onpopstate = () => daWae.handle;
window.route = () => daWae.route();