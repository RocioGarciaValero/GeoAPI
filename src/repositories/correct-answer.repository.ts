import {DefaultCrudRepository} from '@loopback/repository';
import {CorrectAnswer} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CorrectAnswerRepository extends DefaultCrudRepository<
  CorrectAnswer,
  typeof CorrectAnswer.prototype.name
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(CorrectAnswer, dataSource);
  }
}
