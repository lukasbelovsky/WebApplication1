import {EntityViewModel} from '../entity-view-model';
import {inject} from 'aurelia-dependency-injection';
import {DriverService} from './driver-service';
import {AppRouter} from 'aurelia-router';

@inject(DriverService, AppRouter)
export class Driver extends EntityViewModel {
    constructor(service, router) {
        super(service, router);
    }

    get title() {
        return this.entity.LastName || 'Driver';
    }
}