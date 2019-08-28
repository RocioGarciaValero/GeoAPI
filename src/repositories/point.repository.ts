import {DefaultCrudRepository} from '@loopback/repository';
import {Point} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PointRepository extends DefaultCrudRepository<
  Point,
  typeof Point.prototype.name
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Point, dataSource);
  }
}
