import settings from './settings';

export class EntityViewModel {
    service;
    entityManager: breeze.EntityManager ;
    entity;
    router;

    constructor(service, router) {
        this.service = service;
        this.router = router;
    }

    activate(info) {
        var promise;

        // load or create the entity.
        if (info.id === 'new') {
            promise = this.service.createNew();
        } else {
            promise = this.service.loadExisting(info.id);
        }

        return promise.then(result => {
            this.entityManager = result.entityManager;
            this.entity = result.entity;
        });
    }

    canDeactivate() {
        return this.hasChanges == false;
    }

    get hasChanges() {
        return this.entityManager.hasChanges();
    }

    save() {
        this.entity.validation.validate().then(() => {
            var saveOptions = new breeze.SaveOptions({ resourceName: settings.saveChangesUrl });
            this.entityManager.saveChanges(null, saveOptions).then(() => this.router.navigateBack());
        });
    }

    cancel() {
        if (this.hasChanges) {
            this.entityManager.rejectChanges();
        }
        this.router.navigateBack();
    }
}