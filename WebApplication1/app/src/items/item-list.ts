import {ListViewModel} from '../list-view-model';
import {inject, singleton} from 'aurelia-dependency-injection';
import {AppRouter} from 'aurelia-router';
import {ItemService} from './item-service';

@inject(AppRouter, ItemService)
@singleton()
export class ItemList extends ListViewModel {
    constructor(router, service) {
        super('items', router, service)
    }
} 