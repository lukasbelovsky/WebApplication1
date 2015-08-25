import settings from '../settings';
import {inject} from 'aurelia-framework';
import {EntityManagerFactory} from '../entity-manager-factory';

@inject(EntityManagerFactory)
export class DriverService {
    em: breeze.EntityManager;
    emFactory: EntityManagerFactory;

    constructor(emFactory: EntityManagerFactory) {
        this.emFactory = emFactory;
    }

    getEntityManager() {
        var self = this;
        if (this.em == null) {
            return this.emFactory.createEntityManager().then(em => {
                self.em = em;
                return self.em;
            });
        } else {
            return Promise.resolve(self.em);
        }
    }

    getPage(pageIndex) {
        var query = new breeze.EntityQuery;
        query = query
            .from(settings.driversUrl)
            .orderBy('LastName')
            .skip(pageIndex * settings.pageSize)
            .take(settings.pageSize)
            .inlineCount();

        return this.getEntityManager()
            .then(em => em.executeQuery(query))
            .then(queryResult => {
                return {
                    entities: queryResult.results,
                    pageCount: Math.ceil(queryResult.inlineCount / settings.pageSize)
                };
            });
    }

    loadExisting(id) {
        var driverQuery = new breeze.EntityQuery()
            .from(settings.driversUrl)
            .where('Id', '==', id);

        return this.getEntityManager()
            .then(em => em.executeQuery(driverQuery))
            .then(queryResult => {
                return {
                    entity: queryResult.results[0],
                    entityManager: queryResult.entityManager
                };
            });
    }

    createNew() {
        return this.getEntityManager()
            .then(em => {
                var entity = em.createEntity('Driver', { Id: breeze.core.getUuid() });
                return {
                    entity: entity,
                    entityManager: em
                }
            });
    }
}