import {DefaultCrudRepository} from '@loopback/repository';
import {Matter} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MatterRepository extends DefaultCrudRepository<
  Matter,
  typeof Matter.prototype.name
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Matter, dataSource);
  }
}
