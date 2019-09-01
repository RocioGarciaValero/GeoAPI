import {DefaultCrudRepository} from '@loopback/repository';
import {Rules} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RulesRepository extends DefaultCrudRepository<
  Rules,
  typeof Rules.prototype.Description
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Rules, dataSource);
  }
}
