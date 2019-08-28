import {DefaultCrudRepository} from '@loopback/repository';
import {Student} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.name
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Student, dataSource);
  }
}
