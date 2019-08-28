import {DefaultCrudRepository} from '@loopback/repository';
import {Answer} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AnswerRepository extends DefaultCrudRepository<
  Answer,
  typeof Answer.prototype.name
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Answer, dataSource);
  }
}
