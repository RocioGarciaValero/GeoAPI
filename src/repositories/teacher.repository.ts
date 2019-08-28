import {DefaultCrudRepository} from '@loopback/repository';
import {Teacher} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TeacherRepository extends DefaultCrudRepository<
  Teacher,
  typeof Teacher.prototype.name
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Teacher, dataSource);
  }
}
