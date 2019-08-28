import {DefaultCrudRepository} from '@loopback/repository';
import {Game} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GameRepository extends DefaultCrudRepository<
  Game,
  typeof Game.prototype.name
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Game, dataSource);
  }
}
