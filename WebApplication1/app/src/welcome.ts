import Security from './resources/security';
import {inject} from 'aurelia-framework';

@inject(Security)
export class Welcome {
    heading = 'Welcome to Cars, inc. database managment client.';
    firstName = '';
    lastName = '';
    security;

    constructor(security) {
        this.security = security;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    submit() {
        this.security.signIn(this.firstName, this.lastName);
    } 
} 