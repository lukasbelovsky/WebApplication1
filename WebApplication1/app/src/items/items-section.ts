/**
* The shell for the customers section of the application.  Will contain either
* the customer-list or customer page.
*/
export class ItemsSection {
    configureRouter(config, router) {
        config.map([
            { route: '', moduleId: './item-list', nav: false, title: '' },
            { route: ':id', moduleId: './item', nav: false, title: '' },
        ]);
    }
}