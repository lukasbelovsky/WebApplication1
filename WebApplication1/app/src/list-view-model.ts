import settings from './settings';
import OrderBy from './resources/orderBy';
import {OrderByDirection} from './resources/orderByDirection';


export class ListViewModel {
    router;
    route;
    service;
    entities = [];
    pageSize = settings.pageSize;
    pageCount = 0;
    pageIndex = 0;
    isLoading = false;
    selectedItem;
    orderBy: OrderBy;
    _search: string;

    constructor(route, router, service, orderByValue) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.orderBy = new OrderBy(orderByValue);
        this.search = null;
    }

    activate() {
        this.load();
    }

    load() {
        this.isLoading = true;
        this.service.getPage(this.pageIndex, this.orderBy.toString(), this.search)
            .then(result => {
                this.entities = result.entities;
                this.pageCount = result.pageCount;
                this.isLoading = false;
            });
    }

    changeOrderBy(value) {
        if (this.orderBy.value == value) {
            this.orderBy.direction = (this.orderBy.direction == OrderByDirection.ASC) ? OrderByDirection.DESC : OrderByDirection.ASC;
        } else {
            this.orderBy.value = value;
            this.orderBy.direction = OrderByDirection.ASC;
        }
        this.load();
    }

    set search(value: string) {
        this._search = value;
        this.load();
    }
    get search():string {
        return this._search;
    }

    setPage(index) {
        this.pageIndex = index;
        this.load();
    }

    select(entity) {
        this.selectedItem = entity;
    }

    addNew() {
        this.router.navigate(this.route + '/new');
    }

    editSelected() {
        this.router.navigate(this.route + '/' + this.selectedItem.Id);
    }

    deleteSelected() {
        var vm = this;
        this.selectedItem.entityAspect.setDeleted();

        return this.service.getEntityManager()
            .then(em => {
                var saveOptions = new breeze.SaveOptions({ resourceName: settings.saveChangesUrl });
                em.saveChanges(null, saveOptions).then(() => vm.load());
            });
    }
} 