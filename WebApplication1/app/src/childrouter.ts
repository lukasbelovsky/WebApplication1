import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {Router, RouterConfiguration} from 'aurelia-router';

export class ChildRouter {
    heading = 'Child Router';
    router: Router;

    configureRouter(config, router) {
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
            { route: 'items', name: 'items', moduleId: 'items/items-section', nav: true, title: 'Our Items' }
        ]);

        this.router = router;
    }
}