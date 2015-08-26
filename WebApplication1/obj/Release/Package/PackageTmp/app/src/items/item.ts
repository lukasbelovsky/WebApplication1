import {EntityViewModel} from '../entity-view-model';
import {inject} from 'aurelia-dependency-injection';
import {ItemService} from './item-service';
import {AppRouter} from 'aurelia-router';

@inject(ItemService, AppRouter)
export class Item extends EntityViewModel {
    constructor(service, router) {
        super(service, router);
    }

    get title() {
        return this.entity.Brand || 'Item';
    }
}