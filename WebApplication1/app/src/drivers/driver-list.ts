import {ListViewModel} from '../list-view-model';
import {inject, singleton} from 'aurelia-dependency-injection';
import {AppRouter} from 'aurelia-router';
import {DriverService} from './driver-service';

@inject(AppRouter, DriverService)
@singleton()
export class DriverList extends ListViewModel {
    constructor(router, service) {
        super('drivers', router, service)
    }
} 