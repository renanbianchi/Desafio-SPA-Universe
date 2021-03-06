export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
    
    window.history.pushState({}, "", event.target.href);
    
    
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const daWae = this.routes[pathname] || this.routes[404];


    fetch(daWae)
    .then(data => data.text())
    .then(html => {
      document.querySelector('.content').innerHTML = html
      document.documentElement.style.setProperty('--bg', `url("bg/${ pathname != "/" ? pathname : `/home`}.png`);
      //document.documentElement.style.setProperty('--font-size', `2.4rem`)
    })
    
  } 

}