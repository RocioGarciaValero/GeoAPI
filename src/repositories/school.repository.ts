import {DefaultCrudRepository} from '@loopback/repository';
import {School} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SchoolRepository extends DefaultCrudRepository<
  School,
  typeof School.prototype.name
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(School, dataSource);
  }
}
