import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class App {
    router = Router;
    constructor(router) {
        this.router = router;
        router.configure(config => {
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
                { route: 'items',name: 'items', moduleId: 'items/items-section', nav: true, title: 'Our Items' },
                { route: 'childrouter', name: 'childrouter', moduleId: 'childrouter', nav: true, title: 'Child Router' },
            ]);
        });
    }
}