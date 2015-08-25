import settings from './settings';

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

    constructor(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }

    activate() {
        this.load();
    }

    load() {
        this.isLoading = true;
        this.service.getPage(this.pageIndex)
            .then(result => {
                this.entities = result.entities;
                this.pageCount = result.pageCount;
                this.isLoading = false;
            });
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