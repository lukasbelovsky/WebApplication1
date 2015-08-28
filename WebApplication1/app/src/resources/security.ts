import {Router, Redirect} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {App} from '../app';
import {HttpClient} from 'aurelia-http-client';

@inject(Router, HttpClient)
export default class Security {  
    _isLoggedIn: boolean;  
    router: Router;
    app: App;
    http: HttpClient;

    constructor(router, http) {
        this.router = router;
        this.http = http;
    }

    get isLoggedIn(): boolean {
        return this._isLoggedIn;
    }
    set isLoggedIn(value: boolean) {
        this._isLoggedIn = value;

        this.app.reconfigureRoutes();
    }

    signIn(username, password) {
        var self = this;
        var data = {
            Username: username,
            Password: password
        };
        this.http.post("/api/auth/signIn", data)
            .then(result => self.isLoggedIn = result.content.isAuthenticated);
    }

    signOut() {
        var self = this;
        this.http.get("/api/auth/signOut")
            .then(result => self.isLoggedIn = false);
    }

    isAuthenticated() {
        var self = this;
        this.http.get("/api/auth/IsAuthenticated")
            .then(result => self.isLoggedIn = result.content.isAuthenticated);
    }
} 