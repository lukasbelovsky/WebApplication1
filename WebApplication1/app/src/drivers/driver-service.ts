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

    getPage(pageIndex, orderBy, search) {
        var query = new breeze.EntityQuery;
        
        
        if (search) {
            var Predicate = breeze.Predicate;
            var multiSearch = Predicate
                .create('FirstName', breeze.FilterQueryOp.Contains, search)
                .or('LastName', breeze.FilterQueryOp.Contains, search)
                .or('City', breeze.FilterQueryOp.Contains, search)
                .or('Zip.Code', breeze.FilterQueryOp.Contains, search)
            query = query
                .from(settings.driversUrl)
                .where(multiSearch)
                .orderBy(orderBy)
                .expand('Zip')
                .skip(pageIndex * settings.pageSize)
                .take(settings.pageSize)
                .inlineCount();
        } else {
            query = query
                .from(settings.driversUrl)
                .orderBy(orderBy)
                .expand('Zip')
                .skip(pageIndex * settings.pageSize)
                .take(settings.pageSize)
                .inlineCount();
        }

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

    loadZips() {
        var query = new breeze.EntityQuery;
        query = query
            .from(settings.zipsUrl)
            .orderBy('Code');

        return this.getEntityManager()
            .then(em => em.executeQuery(query))
            .then(queryResult => {
                return {
                    entities: queryResult.results
                };
            });
    }
}