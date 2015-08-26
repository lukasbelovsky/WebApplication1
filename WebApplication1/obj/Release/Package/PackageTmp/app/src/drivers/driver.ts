import {EntityViewModel} from '../entity-view-model';
import {inject} from 'aurelia-dependency-injection';
import {DriverService} from './driver-service';
import {AppRouter} from 'aurelia-router';

@inject(DriverService, AppRouter)
export class Driver extends EntityViewModel {
    zips;
    constructor(service, router) {
        super(service, router);        
    }

    get title() {
        return this.entity.LastName || 'Driver';
    }

    activate(info) {        
        this.loadZips();
        return super.activate(info);
    }

    loadZips() {
        var self = this;
        this.service.loadZips()
            .then(result => {
                self.zips = result.entities;
            });
    }
    
    setZip(zip) {
        this.entity.Zip = zip;
    }
}