import {DefaultCrudRepository} from '@loopback/repository';
import {Hint} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HintRepository extends DefaultCrudRepository<
  Hint,
  typeof Hint.prototype.name
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Hint, dataSource);
  }
}
