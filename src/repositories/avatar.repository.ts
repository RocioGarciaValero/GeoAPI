import {DefaultCrudRepository} from '@loopback/repository';
import {Avatar} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AvatarRepository extends DefaultCrudRepository<
  Avatar,
  typeof Avatar.prototype.name
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Avatar, dataSource);
  }
}
