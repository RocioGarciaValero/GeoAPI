import {DefaultCrudRepository} from '@loopback/repository';
import {Position} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PositionRepository extends DefaultCrudRepository<
  Position,
  typeof Position.prototype.name
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Position, dataSource);
  }
}
