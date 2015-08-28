import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {Router, Redirect} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import Security from './resources/security';

@inject(Router, Security)
export class App {
    router;
    security : Security;
    constructor(router, security) {
        this.router = router;
        this.security = security;
        this.security.app = this;
        this.reconfigureRoutes();       
    }

    reconfigureRoutes() {
        this.router.reset();
        this.router.configure(config => {
            config.title = '';
            config.addPipelineStep('authorize', AuthorizeStep)
            config.map([
                { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
                { route: 'items', name: 'items', moduleId: 'items/items-section', nav: this.security.isLoggedIn, auth: true, title: 'Our Cars' },
                { route: 'drivers', name: 'drivers', moduleId: 'drivers/drivers-section', nav: this.security.isLoggedIn, auth: true, title: 'Our Drivers' },
                { route: 'childrouter', name: 'childrouter', moduleId: 'childrouter', nav: this.security.isLoggedIn, auth: true, title: 'Site Nav' },
            ]);
        });
        this.router.refreshNavigation();
    }
}

@inject(Security)
class AuthorizeStep {
    security;
    constructor(security) {
        this.security = security;
    }
    run(routingContext, next) {
        // Check if the route has an "auth" key
        // The reason for using `nextInstructions` is because
        // this includes child routes.
        if (routingContext.nextInstruction.config.auth) {
            var isLoggedIn = this.security.isLoggedIn;
            if (!isLoggedIn) {
                return next.cancel(new Redirect('welcome', null));
            }
        }
        return next();
    }
}