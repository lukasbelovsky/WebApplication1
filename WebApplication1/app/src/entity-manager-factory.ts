import settings from './settings';
import {inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import {declarePropertyDependencies} from 'aurelia-framework';

@inject(Validation)
export class EntityManagerFactory {
    entityManager;
    validation;

    constructor(validation: Validation) {
        this.validation = validation;
    }

    createEntityManager() {
        if (this.entityManager) {
            return Promise.resolve(this.copyEntityManager());
        }

        this.entityManager = new breeze.EntityManager(settings.serviceName);
        return this.entityManager.fetchMetadata()
            .then(() => {
                this.buildModel(this.entityManager.metadataStore);
                return this.copyEntityManager();
            });
    }

    private copyEntityManager() {
        var copy = this.entityManager.createEmptyCopy();
        copy.entityChanged.subscribe(this.logChanges);
        return copy;
    }

    private buildModel(store) {
        this.buildItemModel(store);
        this.buildDriverModel(store);
        this.buildZipModel(store);

    }

    private buildItemModel(store) {
        var self = this;
        var itemCtor = function () {
        };
        var itemInitializer = function (item) {
            item.validation = self.validation.onBreezeEntity(item);
        };

        store.registerEntityTypeCtor('Item', itemCtor, itemInitializer);
    }

    private buildDriverModel(store) {
        var self = this;
        var driverCtor = function () {
        };
        var driverInitializer = function (driver) {
            driver.validation = self.validation.onBreezeEntity(driver);
            Object.defineProperty(driver, 'displayQualified', {
                get: function () { return this.Qualified ? 'Ano' : 'Ne'; }
            });
        };

        store.registerEntityTypeCtor('Driver', driverCtor, driverInitializer);
    }

    private buildZipModel(store) {
        var self = this;
        var zipCtor = function () {
        };
        var zipInitializer = function (zip) {
            zip.validation = self.validation.onBreezeEntity(zip);
        };

        store.registerEntityTypeCtor('ZIP', zipCtor, zipInitializer);
    }

    private logChanges(data) {
        var message = 'Entity Changed.  Entity: ' + (data.entity ? data.entity.entityType.name + '/' + data.entity.entityAspect.getKey().toString() : '?') + ';  EntityAction: ' + data.entityAction.getName() + '; ';
        if (data.entityAction === breeze.EntityAction.PropertyChange) {
            var pcArgs = data.args;
            message += 'PropertyName: ' + (pcArgs.propertyName || 'null') + '; Old Value: ' + (pcArgs.oldValue ? pcArgs.oldValue.toString() : 'null') + '; New Value: ' + (pcArgs.newValue ? pcArgs.newValue.toString() : 'null') + ';';
        }
        if (data.entityAction === breeze.EntityAction.EntityStateChange) {
            message += 'New State: ' + data.entity.entityAspect.entityState.getName() + ';';
        }
        console.log(message);
    };
}